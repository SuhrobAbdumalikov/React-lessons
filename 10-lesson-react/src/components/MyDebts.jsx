import PropTypes from "prop-types";
import DebtCard from "./DebtCard";

const MyDebts = ({ debts }) => {
  return (
    <div className="mt-5">
      {debts.map((debt, idx) => {
        return <DebtCard {...debt} key={idx} />;
      })}
    </div>
  );
};

MyDebts.propTypes = {
  debts: PropTypes.array,
};

export default MyDebts;
