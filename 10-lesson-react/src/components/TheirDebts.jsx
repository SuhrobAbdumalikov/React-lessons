import PropTypes from "prop-types";
import DebtCard from "./DebtCard";

const TheirDebts = ({ debts }) => {
  return (
    <div className="mt-5">
      {debts.map((debt, idx) => {
        return <DebtCard {...debt} key={idx} />;
      })}
    </div>
  );
};

TheirDebts.propTypes = {
  debts: PropTypes.array,
};

export default TheirDebts;
