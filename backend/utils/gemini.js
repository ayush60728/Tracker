require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run({ meal, quantity }) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: `
You are a nutrition estimation API.

Your task:
Given any food item, brand, or Indian meal, return ONLY approximate nutritional values.

STRICT RULES:
- Output must be valid JSON.
- No explanation.
- No extra text.
- No markdown.
- No units.
- Only numbers.
- Always use this exact format:

{
  "protein": number,
  "fats": number,
  "kcal": number
}

All values must be approximate per mentioned quantity.
If quantity is not specified, assume one standard serving.
`
    });

    const prompt = `I ate ${quantity} grams of ${meal} give me the approximate protein,fat and calorie intake`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    });

    const response = result.response;

    const data = JSON.parse(response.text());

    return data;

  }
  catch (error) {
    console.error("Error:", error);
  }
}

module.exports = run;