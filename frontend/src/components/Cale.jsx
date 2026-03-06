import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg-[#060D1A]/96 p-2 text-white  border border-white/10">
        <DateCalendar
          sx={{
            "& .MuiPickersDay-root": {
              color: "white", // ✅ make dates white
            },

            "& .MuiDayCalendar-weekDayLabel": {
              color: "rgba(255,255,255,0.5)", // weekday labels
            },

            "& .MuiPickersCalendarHeader-label": {
              color: "white", // month label
            },

            "& .MuiSvgIcon-root": {
              color: "white", // arrows
            },

            "& .MuiPickersDay-root:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
            },

            "& .MuiPickersDay-root.Mui-selected": {
              backgroundColor: "#3B82F6",
              color: "#fff",
            },
            "& .MuiPickersDay-root.MuiPickersDay-today": {
              border: "1px solid rgba(255,255,255,0.6)", // clearer ring
            },
            "& .MuiPickersDay-root.MuiPickersDay-today:hover": {
              backgroundColor: "rgba(255,255,255,0.10)",
            },
            "& .MuiPickersDay-root.MuiPickersDay-today.Mui-selected": {
              border: "1px solid #3B82F6", // if today is selected, match blue
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}