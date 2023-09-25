export const Button = ({ btnTitle }) => (
  <button className="btn">{btnTitle}</button>
);
// export default Button

export const Groups = ({
  groupName,
  course,
  started,
  room,
  students,
  time,
}) => (
  <div className="groupsDiv">
    <div>Group Name:<p>{groupName}</p></div>
    <div>Course:<p>{course}</p></div>
    <div>Started:<p>{started}</p></div>
    <div>Room:<p>{room}</p></div>
    <div>Students:<p>{students}</p></div>
    <div>Time:<p>{time}</p></div>
  </div>
);
