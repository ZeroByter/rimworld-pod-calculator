import css from "./inputPanel.module.scss";

export default function InputPanel({ children }) {
  return <div className={css.root}>{children}</div>;
}
