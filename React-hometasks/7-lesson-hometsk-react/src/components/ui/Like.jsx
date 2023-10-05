import { Card } from "../Card";
import "../../style/LikeModal.css";
import React from "react";

const Like = ({ isOpen, toggleModal, Data, takeLike }) => {
  return (
    <div className="modalContainer">
      <div className={`blur ${isOpen ? "" : "hide"}`} onClick={toggleModal} />
      <div className="modalAndClose">
        <div className={`modal ${isOpen ? "" : "hide"}`}>
          {Data.map((el) => {
            const { isliked } = el;
            return (
              <>
                {el.isliked ? (
                  <>
                    <Card props={el} takeLike={takeLike} isliked={isliked} />
                  </>
                ) : null}
              </>
            );
          })}
        </div>
        <div className={`close ${isOpen ? "" : "hide"}`} onClick={toggleModal}>
          ❌
        </div>
      </div>
    </div>
  );
};

export default Like;
