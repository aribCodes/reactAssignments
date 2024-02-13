import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const { 
    handleSubmit, 
    register,
    formState: { errors },
  } = useForm();
 
  function handlePwdDisplay() {
    setShowPwd((prev) => !prev)
  }

  function handleLogin(data) {
    alert("Data", data);
    sessionStorage.setItem("user", data.email);
  }
  return (
    <>
        <div>Login</div>

        <form onSubmit={handleSubmit(handleLogin)}>
            <input placeholder='Email' type="email" {...register("email", 
              { 
                required: {
                  value: true,
                  message: "This field is required",
                } 
              }
              )}
            />
            {errors.email ? <span>{errors.email.message}</span>: ""}
            <br />

            <input placeholder='*******' type={ showPwd ? 'text':'password' } {...register("password", 
              { 
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 6,
                  message: "password must be 6 characters long"
                }
              }
              )}
            />
            <button type='button' onClick={handlePwdDisplay}>{showPwd ? "Hide":"Show"}</button>
            {errors.password ? <span>{errors.password.message}</span> : ''}

            <br />
            <button onClick={handleLogin} type='submit'>Login</button>
        </form>
    </>
  )
}

export default Login