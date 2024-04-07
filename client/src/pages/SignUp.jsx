import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };
  return (
    <form className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="bg-muted w-full md:w-[60%] rounded-md p-8">
        <h1 className="text-center text-2xl font-serif mb-4">echo.blog</h1>
        <p className="text-center text-sm font-serif mb-4">
          Welcome to echo.blog! Please create your account.
        </p>
        <label htmlFor="username" className="block font-serif text-sm">
          Enter your Username
        </label>
        <div className="mt-1">
          <input
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="echo"
            className="w-full border-1 border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <label htmlFor="email" className="block font-serif text-sm">
          Enter your Email
        </label>
        <div className="mt-1">
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            placeholder="echo@gmail.com"
            className="w-full border-1 border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <label htmlFor="password" className="block mt-4 font-serif text-sm">
          Enter your Password
        </label>
        <div className="mt-1">
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="********"
            className="w-full border-1 border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="w-full bg-primary text-white rounded-md p-2 mt-6"
        >
          Sign Up
        </button>
        <div className="mt-5 text-center">
          <span className="text-sm font-serif">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary">
              <span className="text-primary cursor-pointer text-green-600">
                Sign In
              </span>
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
