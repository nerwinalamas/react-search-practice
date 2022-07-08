import React from "react";

function UserTable({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr className="table-title">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Country</th>
          </tr>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td className="table-data">{user.first_name}</td>
                <td className="table-data">{user.last_name}</td>
                <td className="table-data">{user.email}</td>
                <td className="table-data">{user.phone}</td>
                <td className="table-data">{user.city}</td>
                <td className="table-data">{user.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
