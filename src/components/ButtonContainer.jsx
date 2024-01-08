import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButonClick }) => {
  const buttonNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => {
        return (
          <button
            className={styles.button}
            onClick={() => onButonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
