import { useState } from "react";
import css from "./excludeInput.module.scss";

export default function ExcludeInput({ onChange }) {
  const [value, setValue] = useState(0);

  const setSelfValue = (newValue) => {
    return () => {
      setValue(newValue);
      if (onChange) onChange(newValue);
    };
  };

  return (
    <div className={css.root}>
      <div className={css.title}>
        <span>Exclude steel/components</span>
        <span className={css.help}>
          [?]
          <div className={css.tooltip}>
            <div>What is this for?</div>
            <div>
              If your using transport ports to go mine steel/component outposts,
              you don't need to bring those materials with you since you can use
              what you mine to go back home.
            </div>
          </div>
        </span>
      </div>
      <div className={css.inputs}>
        <button data-selected={value === 0} onClick={setSelfValue(0)}>
          <img src="/steel.webp" alt="Steel" />
          <img src="/component.webp" alt="Component" />
        </button>
        <button data-selected={value === 1} onClick={setSelfValue(1)}>
          <span className={css.crossedOut}>
            <img src="/crossed.webp" alt="Crossed Out" />
          </span>
          <img src="/steel.webp" alt="Steel" />
          <img src="/component.webp" alt="Component" />
        </button>
        <button data-selected={value === 2} onClick={setSelfValue(2)}>
          <img src="/steel.webp" alt="Steel" />
          <span className={css.crossedOut}>
            <img src="/crossed.webp" alt="Crossed Out" />
          </span>
          <img src="/component.webp" alt="Component" />
        </button>
      </div>
    </div>
  );
}
