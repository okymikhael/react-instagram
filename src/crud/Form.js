import React from "react";

export const Form = ({ nama, umur, hobby, handleChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="block w-50 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          onChange={(event) => handleChange(event)}
          value={nama}
          placeholder="Nama"
          name="nama"
          id=""
        />
        <br />
        <input
          type="number"
          className="block w-50 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          onChange={(event) => handleChange(event)}
          value={umur}
          placeholder="Umur"
          name="umur"
          id=""
        />
        <br />
        <input
          type="text"
          className="block w-50 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          onChange={(event) => handleChange(event)}
          value={hobby}
          placeholder="Hobby"
          name="hobby"
          id=""
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
