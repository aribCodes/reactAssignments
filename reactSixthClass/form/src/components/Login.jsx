import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [ searchParams, setSearchParams] = useSearchParams();

  const [showPwd, setShowPwd] = useState(false);
  const [pwdError, setPwdError] = useState("");
  const [showConfPwd, setShowConfPwd] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  function handleLogin(data) {
    sessionStorage.setItem("user", JSON.stringify(data));
    const getPassword = watch("password");
    console.log("the pass is ", getPassword);
    const getConfirmPassword = watch("confirmPassword");
    console.log("the pass is ", getConfirmPassword);

    if (getPassword === getConfirmPassword) {
      navigate("/home");
      searchParams.set("foo","bar");
      searchParams.set("age",21);
      setSearchParams(searchParams);
      console.log(searchParams.get("age"));
    }
    else{
      setPwdError("Password doesn't match the above field.")
    }
  }
  function handleShowPwd() {
    setShowPwd((prev) => !prev);
  }
  function handleShowConfPwd() {
    setShowConfPwd((prev) => !prev);
  }


  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          placeholder="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "This is require field",
            },
          })}
        />

        {errors.email ? <span>{errors.email.message}</span> : ""}

        <br />
        <input
          placeholder="Password"
          type={showPwd ? "text" : "password"}
          {...register("password", {
            required: {
              value: true,
              message: "This is  required field",
            },
            minLength: {
              value: 5,
              message: "Password should be 5 character",
            },
          })}
        />

        <button type="button" onClick={handleShowPwd}>{showPwd ? "Hide" : "Show"}</button>
        {errors.password ? <span>{errors.password.message}</span> : ""}
        <br />

        <input
          placeholder="Confirm Password"
          type={showConfPwd ? "text" : "password"}
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "This is  required field",
            },
          })}
        />

        <button type="button" onClick={handleShowConfPwd}>{showConfPwd ? "Hide" : "Show"}</button>
        {errors.confirmPassword ? <span>{errors.confirmPassword.message}</span> : ""}
        {pwdError.length > 0 ? <span>{pwdError}</span> : ""}
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
