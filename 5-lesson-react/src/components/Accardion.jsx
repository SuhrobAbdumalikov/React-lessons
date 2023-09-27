import { Fragment, useState } from "react";
import "./acordion.css";

const Accordion = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShow((prev) => !prev)} className="btn">
        {show ? "Yashirish" : "Korsatish"}
      </button>
      <div className={show ? "show" : "hide"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        necessitatibus illum enim libero placeat quas dolore? Quia optio ducimus
        odit dolor tenetur soluta id nesciunt similique possimus cum accusantium
        error repellendus, voluptates facere alias. Assumenda vitae, voluptatem
        blanditiis quas eaque nesciunt harum iure facilis. Quisquam, harum
        dolores accusamus deleniti omnis eos quis fuga itaque fugiat quidem
        doloremque corrupti, ullam illo eaque maxime? Nam amet, minima aperiam
        recusandae soluta tenetur ab ea cumque, minus earum, commodi officiis
        dolorum voluptas facere ratione. Molestiae hic maxime suscipit nostrum
        explicabo voluptates magnam pariatur ab aliquid. Nobis animi maxime iste
        eius nesciunt cupiditate ea numquam non id magni, accusantium voluptate
        provident enim, hic rerum dolor. Delectus ipsam excepturi debitis beatae
        porro, molestiae voluptatum ex, cupiditate nihil officia veniam
        voluptates nesciunt ipsum nulla, repellendus tempore eos a accusantium
        voluptatibus quasi vero praesentium omnis veritatis ab! Quas error illum
        reiciendis dolor ad. Quaerat eius autem quae quod molestias, sapiente
        minus laudantium enim est consequatur dolor magni excepturi fuga
        suscipit velit porro, atque cum dolore, laboriosam eligendi? Voluptates
        nihil doloribus nesciunt corporis omnis cupiditate ipsum qui cum vero
        repellat explicabo corrupti at illum recusandae fugiat, libero cumque,
        obcaecati eaque excepturi possimus, quis quasi temporibus.
        Necessitatibus esse natus, harum et voluptas tempora pariatur
        accusantium iure sint magnam eveniet praesentium quaerat iste doloremque
        vero nobis tenetur commodi veniam est nisi fuga dolores temporibus?
        Consectetur quod modi delectus? Velit quae ad veritatis doloremque
        saepe. Modi magnam impedit cumque, dolorum ipsa quo voluptatem quae
        numquam iusto, vitae neque! Assumenda quod corrupti excepturi? Sapiente
        assumenda, harum, doloremque vero facilis, porro quaerat ipsam fugit
        ullam animi ipsum exercitationem corporis. Veniam quia delectus
        voluptates natus est, maiores architecto minima dolor, nemo itaque
        necessitatibus consectetur ut molestiae id doloribus alias velit
        repellendus! Eius quas minima, laudantium, modi sed cupiditate, sequi
        alias quia tenetur dolorem aliquam impedit.
      </div>
    </Fragment>
  );
};

export default Accordion;
