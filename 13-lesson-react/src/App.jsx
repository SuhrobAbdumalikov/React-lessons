import { useEffect, useState } from "react";
import { useRequest } from "./utils/httpReques";
import UsersList from "./components/UsersList";
import EditModal from "./components/editModal";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  //========>> get user
  useEffect(() => {
    (async () => {
      const data = await useRequest.get("users");
      setData(data.data);
    })();
  }, []);

  //======>> add user
  const addUSer = ({ userName, userWebSite, userPhone }) => {
    try {
      const newUSer = {
        id: new Date().getMilliseconds(),
        name: userName,
        phone: userPhone,
        website: userWebSite,
      };
      (async () => {
        const dataPost = await useRequest.post("/users", newUSer);
        setData([...data, dataPost.data]);
        console.log("added", dataPost.data);
      })();
    } catch (error) {
      console.log(error);
    }
  };

  //======>> delete user
  const deleteUSer = (id) => {
    try {
      (async () => {
        const deleteUser = await useRequest.delete(`/users/${id}`);
        if (deleteUser.status === 200) {
          setData((data) => data.filter((user) => user.id !== id));
          console.log("delete", deleteUser);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  };

  //=========>> edit user
  const editUser = ({ userName, userPhone, userWebSite, id }) => {
    try {
      const EditUSer = {
        id: id,
        name: userName,
        phone: userPhone,
        website: userWebSite,
      };

      (async () => {
        const editReponse = await useRequest.patch(`users/${id}`, EditUSer);
        if (editReponse.status === 200) {
          console.log("edited", editReponse.data);
          setData([...data, editReponse.data]);
        }
      })();
    } catch (error) {
      console.log(error);
    }
  };

  // const editUser = ({ userName, userPhone, userWebSite, id }) => {
  //   useRequest
  //     .patch(`users/${id}`, {
  //       id: id,
  //       name: userName,
  //       phone: userPhone,
  //       website: userWebSite,
  //     })
  //     .then((res) => console.log("edited", res))
  //     .catch((error) => console.log(error));

  //   data.push({ userName, userPhone, userWebSite, id });
  //   const newSortData = data.sort((a, b) => a.id - b.id);
  //   setData(newSortData);
  // };

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary mb-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add User
      </button>
      <div className="usersList">
        {data.map(({ id, name, phone, website }, idx) => {
          return (
            <UsersList
              key={idx}
              userName={name}
              userPhone={phone}
              userWebSite={website}
              id={id}
              deleteUser={deleteUSer}
              editUser={editUser}
            />
          );
        })}
      </div>
      <Modal addUSer={addUSer} />
      <EditModal editUser={editUser} />
    </div>
  );
}

export default App;
