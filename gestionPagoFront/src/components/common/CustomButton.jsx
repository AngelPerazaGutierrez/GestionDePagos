import "../../assets/css/common/costomButton.css";

export const CustomButton = ({ onClick, text, icon, custo }) => {
  return (
    <button onClick={onClick} className={`btn ${custo}`}>
      {icon && <span className="custom-button-icon">{icon}</span>}
      {text}
    </button>
  );
};
