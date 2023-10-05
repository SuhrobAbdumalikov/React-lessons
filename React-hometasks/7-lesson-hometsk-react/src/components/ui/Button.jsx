import "../../style/Button.css";
const Button = ({ children, bcColor, color }) => {
  return (
    <button
      style={{ backgroundColor: bcColor, color: color }}
      className="mainBtn"
    >
      {children}
    </button>
  );
};

export default Button;
