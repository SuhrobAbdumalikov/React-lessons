import { Card, RecomendationCard } from "./Card";

export const RecomendationCars = ({ Data,takeLike }) => {
  return (
    <div className="recomendationCarCards">
      {Data.map((prop) => {
        const {isliked} = prop
        return prop.popularCar ? null : (
          <Card props={prop} takeLike={takeLike} isliked={isliked}/>
        );
      })}
    </div>
  );
};

export const PopularCars = ({ Data, takeLike}) => {
  return (
    <div className="popularCarCards">
      {Data.map((prop) => {
        const {isliked} = prop
        return prop.popularCar ? (
          <RecomendationCard props={prop} takeLike={takeLike} isliked={isliked}/>
        ) : null;
      })}
    </div>
  );
};
