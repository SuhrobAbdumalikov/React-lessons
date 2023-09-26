export const Card = ({props}) => {
  return (
    <div className="cardBox">
      {props.map((card) => {
        return (
          <div className="box">
            <img src={card.img} />
            <h4>{card.title}</h4>
          </div>
        );
      })}
    </div>
  );
};
