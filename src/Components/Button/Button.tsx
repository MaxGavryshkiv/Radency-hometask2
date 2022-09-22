import styles from "./Button.module.css";

const Button = ({
  handleClick,
  text,
}: {
  handleClick: () => void;
  text: string;
}) => {
  return (
    <button onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
