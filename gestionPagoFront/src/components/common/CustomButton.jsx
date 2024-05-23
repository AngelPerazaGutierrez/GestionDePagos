import "../../assets/css/common/costomButton.css";

export const CustomButton = ({ onClick, text, custo }) => {
  return (
    <button onClick={onClick} className={`btn ${custo}`}>
      {text}
    </button>
  );
};
