import Modal from "./components/modal";
import { useState } from "react";
import "./components/Modal.css";


function App() {
  const [isOpen, SetIsOpen] = useState(false);
  const [newUSer, SetNewUser] = useState([]);
  const [editUser,SetEditUSer] = useState(false);

  const toggleModal = () => {
    SetIsOpen((prev) => !prev);
  };
  const addUSer = () =>{
        SetNewUser(() =>{
          return newUSer.push([...newUSer, {id: newUSer.length +1, title: 'gfc'}])
    });
  }
  const EditUserData = () =>{
    SetEditUSer(true)
  }

  return (
    <div>
      <button id="addBtn" onClick={() =>{toggleModal();SetEditUSer(false);}}>
        Add
      </button>
      <div>
        {newUSer.map(({ title, id }) => {
          return (
            <div className="userBox" key={id}>
              <h1 id={id}>{title}</h1>
              <button onClick={()=>{
                SetNewUser();
                addUSer();
                }}>Edit</button>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <input type="text" id="input"  />
        {editUser ? <button id="save" onClick={EditUserData}>Edit</button> : <button id="save" onClick={addUSer}>Save</button>}
      </Modal>
    </div>
  );
}

export default App;
