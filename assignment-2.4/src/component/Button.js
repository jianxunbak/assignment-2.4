import styles from "./Button.module.css";

function Button({ label, onClick, count }) {
  return (
    <button disabled={count <= 0} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
