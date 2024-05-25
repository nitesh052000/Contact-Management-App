import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/action";
import React from "react";

const Contact_form = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mob: "",
    status: "active",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  function handleSave() {
    dispatch(addContact(form));
  }

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl text-black font-bold mb-4">
        <button className=" shadow shadow-slate-700 font-bold bg-orange-500 p-3 text-2xl rounded-lg">
          Create Contact
        </button>
      </h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border text-center  border-orange-600 p-2 rounded-xl"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-full border text-center border-orange-600 p-2 rounded-xl"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Mobile Number
        </label>
        <input
          className="w-full border text-center border-orange-600 p-2 rounded-xl"
          id="last-name"
          type="number"
          name="mob"
          min="10"
          max="10"
          value={form.mob}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="w-full border text-center text-bold border-orange-600 p-2 rounded-xl"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value={"active"}>
            <strong>Active</strong>
          </option>
          <option value={"inactive"}>
            <strong>Inactive</strong>
          </option>
        </select>
      </div>
      <button
        className="bg-orange-500 hover:bg-teal-600 shadow-md text-black font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
};

export default Contact_form;
