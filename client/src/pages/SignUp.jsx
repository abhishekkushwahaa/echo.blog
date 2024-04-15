import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [formData, setformData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again later.");
      setLoading(false);
    }
  };
  return (
    <form
      className="min-h-screen flex justify-center items-center overflow-hidden"
      onSubmit={handleSubmit}
    >
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            id="password"
            type="password"
            autoComplete="on"
            placeholder="********"
            className="w-full border-1 border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white rounded-md p-2 mt-6"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {errorMessage && (
          <div className="text-red-500 font-serif text-sm mt-4 bg-red-200 rounded-sm p-2">
            {errorMessage}
          </div>
        )}
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
