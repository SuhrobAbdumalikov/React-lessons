import "./styles/style.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleModal = () => {
    SetIsOpen((prev) => !prev);
  };
  return (
    <>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <h1>Welcome!</h1>
        <input type="text" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          aliquid modi alias consectetur commodi ullam illo dolore, maxime nisi.
          Nisi impedit itaque magnam enim molestiae labore sed praesentium,
          fugit aspernatur eius. Laudantium, quisquam aspernatur. Itaque, earum
          autem sunt repudiandae velit quasi commodi quas nisi numquam in nobis
          quidem ab est reiciendis? Ipsam nesciunt repellat, omnis deleniti
          cumque voluptate provident vitae quos hic id rerum harum ea quod
          voluptatum quasi. Ratione placeat dolorum recusandae a odio quis
          consequatur! Perspiciatis pariatur sequi quisquam. Autem fugiat
          consequatur earum molestias excepturi nesciunt sit alias fugit ab quis
          quasi quod aperiam distinctio rem, ipsa ullam.
        </p>
      </Modal>
    </>
  );
};

export default App;
