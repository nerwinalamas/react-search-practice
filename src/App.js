import React, { useState } from "react";
import "./App.css";
import Users from "./Users.json";
import UserTable from "./UserTable";

function App() {
  const initialData = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  };

  const [isSearch, setIsSearch] = useState("");
  const [isData, setIsData] = useState(Users);
  const [isFormData, setIsFormData] = useState(initialData);

  const fields = [
    "first_name",
    "last_name",
    "email",
    "phone",
    "city",
    "country",
  ];

  const DisplayUsers = isData.filter((user) => {
    return fields.some((item) =>
      user[item].toLowerCase().includes(isSearch.toLowerCase())
    );
  });

  const deleteData = (id) => {
    let removeData = isData.filter((item, index) => {
      return index !== id;
    });
    setIsData(removeData);
  };

  const checkLastId = isData.length;

  const AddForm = (e) => {
    e.preventDefault();
    const addNewUser = {
      id: checkLastId + 1,
      first_name: isFormData.first_name,
      last_name: isFormData.last_name,
      email: isFormData.email,
      phone: isFormData.phone,
      city: isFormData.city,
      country: isFormData.country,
    };

    const newUser = [...isData, addNewUser];
    setIsData(newUser);
  };

  return (
    <div className="main-content">
      <div className="container-add-user">
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={(e) =>
            setIsFormData({ ...isFormData, first_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={(e) =>
            setIsFormData({ ...isFormData, last_name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) =>
            setIsFormData({ ...isFormData, email: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="phone"
          onChange={(e) =>
            setIsFormData({ ...isFormData, phone: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={(e) =>
            setIsFormData({ ...isFormData, city: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) =>
            setIsFormData({ ...isFormData, country: e.target.value })
          }
        />
        <button onClick={AddForm}>Add New Users</button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="input-search"
        onChange={(e) => setIsSearch(e.target.value)}
        value={isSearch}
      />
      <UserTable data={DisplayUsers} deleteData={deleteData} />
    </div>
  );
}

export default App;
