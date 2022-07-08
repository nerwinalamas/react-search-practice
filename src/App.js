import React, { useState } from "react";
import "./App.css";
import Users from "./Users.json";
import UserTable from "./UserTable";

function App() {
  const [isSearch, setIsSearch] = useState("");

  const fields = [
    "first_name",
    "last_name",
    "email",
    "phone",
    "city",
    "country",
  ];

  const DisplayUsers = Users.filter((user) => {
    return fields.some((item) =>
      user[item].toLowerCase().includes(isSearch.toLowerCase())
    );
  });

  return (
    <div className="main-content">
      <input
        type="text"
        placeholder="Search"
        className="input-search"
        onChange={(e) => setIsSearch(e.target.value)}
        value={isSearch}
      />
      <UserTable data={DisplayUsers} />
    </div>
  );
}

export default App;
