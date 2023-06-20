import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Date.scss";
import { format, eachDayOfInterval } from "date-fns";

export default function ComboBox() {
  const startDate = new Date(2017, 0, 1); // Date de début
  const endDate = new Date(2035, 11, 31); // Date de fin

  // Générer toutes les dates entre la date de début et la date de fin
  const allDates = eachDayOfInterval({ start: startDate, end: endDate });

  // Formater les dates pour l'affichage dans l'Autocomplete
  const options = allDates.map((date) => format(date, "dd/MM/yyyy"));

  return (
    <div className="dateRangePickerContainer">
      <div className="autocomStarter">
        <Autocomplete
          className="autocomple"
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 170 }}
          renderInput={(params) => <TextField {...params} label="Start Date" />}
        />
      </div>
      <div className="autocomEnder">
        <Autocomplete
          className="autocomple"
          disablePortal
          id="combo-box-end-date"
          options={options}
          sx={{ width: 170 }}
          renderInput={(params) => <TextField {...params} label="End Date" />}
        />
      </div>
    </div>
  );
}
