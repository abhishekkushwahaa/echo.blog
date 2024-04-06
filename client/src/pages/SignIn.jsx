import { Link } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form className="min-h-screen flex justify-center items-center overflow-hidden">
      <div className="bg-muted w-full md:w-[60%] rounded-md p-8">
        <h1 className="text-center text-2xl font-serif mb-4">echo.blog</h1>
        <p className="text-center text-sm font-serif mb-4">
          Welcome back! Please sign in to your account.
        </p>
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
        <div className="flex justify-end mt-2">
          <span className="text-sm font-serif text-primary cursor-pointer">
            Forgot password?
          </span>
        </div>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="w-full bg-primary text-white rounded-md p-2 mt-4"
        >
          Sign in
        </button>
        <div className="mt-5 text-center">
          <span className="text-sm font-serif">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-primary">
              <span className="text-primary cursor-pointer text-green-600">
                Sign up
              </span>
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Signin;
