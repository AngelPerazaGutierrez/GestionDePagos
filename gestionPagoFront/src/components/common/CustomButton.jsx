import "../../assets/css/common/costomButton.css";

export const CustomButton = ({ onClick, text, icon, custo }) => {
  return (
    <>
      <button onClick={onClick} className={`btn ${custo}`}>
        <div className="d-flex align-items-center gap-1 ">
          <span className="">
            {icon} {text}
          </span>
        </div>
      </button>
      {/* <button onClick={onClick} className={`btn ${custo}`}>
      <div className="">
        {icon && (
          <span className="d-flex align-items-center gap-1">
            {icon} {text}
          </span>
        )}
      </div>
    </button> */}
    </>
  );
};
