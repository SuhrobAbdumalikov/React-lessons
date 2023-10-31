import PropTypes from "prop-types";

const CurrencyInput = ({
  currencies,
  currency,
  amount,
  handleAmountChange,
  handleSelectChange,
}) => {
  return (
    <div className="text-black flex gap-2">
      <input
        type="number"
        className="bg-transparent text-[#c9d4dc] border rounded-lg focus:border-gray-400 border-gray-700 p-2 text-lg"
        placeholder="null"
        value={amount}
        onChange={(e) => handleAmountChange(e.target.value)}
      />
      <select
        className="bg-transparent text-[#c9d4dc] border rounded-lg focus:border-gray-400 w-24 border-gray-700 p-2 text-lg"
        name="countries"
        value={currency}
        onChange={(e) => handleSelectChange(e.target.value)}
      >
        {currencies ? (
          currencies?.map((currency) => {
            return (
              <option
                className="bg-transparent"
                key={currency}
                value={currency}
              >
                {currency}
              </option>
            );
          })
        ) : (
          <option className="text-white">Nothing here</option>
        )}
      </select>
    </div>
  );
};

export default CurrencyInput;

CurrencyInput.propTypes = {
  currencies: PropTypes.any,
  currency: PropTypes.any,
  amount: PropTypes.any,
  handleAmountChange: PropTypes.func,
  handleSelectChange: PropTypes.func,
};
