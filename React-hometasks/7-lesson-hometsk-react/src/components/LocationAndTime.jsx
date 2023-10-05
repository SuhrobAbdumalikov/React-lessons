import "../style/LocationAndTime.css";

const LocationAndTime = ({ checkedTitle }) => {
  return (
    <div className="locationAndTime">
      <div className="rangeDiv">
        <input type="radio"></input>
        <p>{checkedTitle}</p>
      </div>
      <div className="selectDiv">
        <div className="location">
          <h3>Location</h3>
          <select>
            <option selected disabled>
              Select city
            </option>
          </select>
        </div>
        <div className="date">
          <h3>Date</h3>
          <select>
            <option selected disabled>
              Select date
            </option>
          </select>
        </div>
        <div className="time">
          <h3>Time</h3>
          <select>
            <option selected disabled>
              Select time
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationAndTime;
