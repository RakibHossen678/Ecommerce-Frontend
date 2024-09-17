import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const data = { email, pass };
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border bg-white mx-auto py-8 shadow px-6">
        <h2 className="text-2xl font-semibold pt-5  ">Please Login</h2>
        <form
          onSubmit={handleLogin}
          className="space-y-5 max-w-lg mx-auto pt-8"
        >
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
            Login
          </button>
        </form>
        <p className="my-5 italic text-sm text-center">
          Don't have an account?{" "}
          <Link className="text-primary px-1 hover:underline" to={"/register"}>
            Register
          </Link>
          here.
        </p>
      </div>
    </section>
  );
};

export default Login;
