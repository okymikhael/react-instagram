import React from "react";

export const Table = ({user, handleEdit, handleDelete}) => {
  return (
    <table className="">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Umur</th>
          <th>Hobby</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>Intro to CSS</td>
          <td>Adam</td>
          <td>858</td>
        </tr> */}
        {user.map((users, index) => (
          <tr>
            <td>{index+1}</td>
            <td>{users.nama}</td>
            <td>{users.umur}</td>
            <td>{users.hobby}</td>
            <td><button className="btn-warning mr-2" onClick={() => handleEdit(users.id)}>EDIT</button> <button onClick={() => handleDelete(users.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
