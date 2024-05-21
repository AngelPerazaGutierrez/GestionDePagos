import "../../assets/css/common/costomButton.css";

export const CustomButton = ({ onClick, text, customClass }) => {
  return (
    <button onClick={onClick} className={`btn ${customClass}`}>
      {text}
    </button>
  );
};
