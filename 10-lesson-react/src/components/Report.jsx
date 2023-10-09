import PropTypes from "prop-types";

const Report = ({ totalMyDebts, totalTheirDebts }) => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">My Debts</h5>
            <p className="card-text">$ {totalMyDebts}</p>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Their Debts</h5>
            <p className="card-text">$ {totalTheirDebts}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Report.propTypes = {
  totalMyDebts: PropTypes.number,
  totalTheirDebts: PropTypes.number,
};

export default Report;
