const validate = require("validator");

const Validate = (data) => {
    console.log(data)

    const mandatory = ['email', 'password'];
    const IsAllowed = mandatory.every((k) => Object.keys(data).includes(k));

    if (!IsAllowed)
        throw new Error("Some Field missing");

    if (!validate.isEmail(data.email))
        throw new Error("Invalid Email");

    if (!validate.isStrongPassword(data.password))
        throw new Error("Weak Password");
}

module.exports = Validate;