import { useState } from "react";
import css from "./input.module.scss";

export default function Input({ label, defaultValue, onChange, min, max }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    let value = parseInt(e.target.value);

    if (value < min) value = min;
    if (value > max) value = max;

    setValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className={css.root}>
      <div>{label}</div>
      <div>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
}
