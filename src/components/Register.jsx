import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [message, setMessage] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const pass = form.password.value;
    const data = { email, pass, username };
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border bg-white mx-auto py-8 shadow px-6">
        <h2 className="text-2xl font-semibold pt-5  ">Please Register</h2>
        <form
          onSubmit={handleRegister}
          className="space-y-5 max-w-lg mx-auto pt-8"
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
            required
            className="w-full px-5 py-3 bg-gray-100 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            className="w-full px-5 py-3 bg-gray-100 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full px-5 py-3 bg-gray-100 focus:outline-none"
          />
          {message && <p className="text-red-500">{message}</p>}
          <button
            type="submit"
            className="w-full mt-5 bg-primary text-white hover:bg-indigo-400 transform duration-300 font-medium py-3 rounded-md "
          >
            Register
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Have an account?{" "}
          <Link className="text-primary px-1 underline" to={"/login"}>
            Login
          </Link>
          here.
        </p>
      </div>
    </section>
  );
};

export default Register;
