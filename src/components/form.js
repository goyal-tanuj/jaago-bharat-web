import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import "./form.css";

export default function App() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const url =
      "http://127.0.0.1:5001/jaagobharatwebdev/us-central1/addcontact?";
    const res = fetch(
      url +
        "name=" +
        data.Name +
        "&email=" +
        data.Email +
        "&phone=" +
        data["Mobile number"] +
        "&zipcode=" +
        data.Zipcode
    );
    toast.promise(res, {
        loading: "Sending...",
        success: "Success!",
        error: "Error"
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formBody">
      <input
        type="text"
        placeholder="Name"
        {...register("Name", { required: true })}
        className="formItem"
      />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { required: true })}
        className="formItem"
      />
      <input
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", { required: true })}
        className="formItem"
      />
      <input
        type="number"
        placeholder="Zipcode"
        {...register("Zipcode", { required: true, max: 999999, maxLength: 6 })}
        className="formItem"
      />

      <input type="submit" className="formSubmit" />
    </form>
  );
}
