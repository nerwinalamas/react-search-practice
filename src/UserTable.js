import React from "react";

function UserTable({ data, deleteData }) {
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
          {data.length > 0
            ? data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="table-data">{user.first_name}</td>
                    <td className="table-data">{user.last_name}</td>
                    <td className="table-data">{user.email}</td>
                    <td className="table-data">{user.phone}</td>
                    <td className="table-data">{user.city}</td>
                    <td className="table-data">{user.country}</td>
                    <td>
                      <button className="btn-edit">Edit</button>
                    </td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => deleteData(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "No Data Shown"}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
