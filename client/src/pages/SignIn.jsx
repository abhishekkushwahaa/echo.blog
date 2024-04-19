import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };

  console.log(email, password);

  return (
    <form
      className="min-h-screen flex justify-center items-center overflow-hidden"
      onSubmit={handleSubmit}
    >
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
          type="submit"
          className="w-full bg-primary text-white rounded-md p-2 mt-4"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
        {errorMessage && (
          <div className="text-red-500 font-serif text-sm mt-4 bg-red-200 rounded-sm p-2">
            {errorMessage}
          </div>
        )}
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
