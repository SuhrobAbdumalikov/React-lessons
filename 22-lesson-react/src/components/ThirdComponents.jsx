import { useContext } from "react";
import { Context } from "../App";

function ThirdComponents() {
  const { color, colors, setColor, isOpen } = useContext(Context);
  return (
    <div>
      {isOpen ? (
        <div
          className={`border-[3px] p-2 rounded-md w-80`}
          style={{ backgroundColor: color, border: color, color: "white" }}
        >
          <h1>Card Title...</h1>
          <p>Card Description</p>
        </div>
      ) : null}
      <div className="flex items-center gap-3 mt-3">
        {colors.map((color) => {
          return (
            <button
              className="px-3 py-1 rounded-md"
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
            >
              {color}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ThirdComponents;
