import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Appcontext";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      login(response);
      console.log("Login successful:", response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
        address,
        gender,
        dob,
        phone,
      });

      console.log("Signup successful:", response.data);
      setIsLogin(true);
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== newConfirmPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const response = await axios.put("http://localhost:5000/api/resetPasswords", {
        email,
        newPassword,
      });

      console.log("Password reset successful:", response.data);
      alert("Password changed successfully. Please login with your new password.");
      setIsResetPassword(false);
      setIsLogin(true);
    } catch (error) {
      console.error("Error during password reset:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isResetPassword ? "Reset Password" : isLogin ? "Login" : "Register"}
        </h2>

        <form
          onSubmit={
            isResetPassword
              ? handlePasswordReset
              : isLogin
              ? handleLogin
              : handleSignup
          }
          className="space-y-6"
        >
          {/* Email is always required */}
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Reset Password Fields */}
          {isResetPassword ? (
            <>
              <div>
                <label className="text-sm font-medium text-gray-600">New Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newConfirmPassword}
                  onChange={(e) => setNewConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            <>
              {/* Login / Signup Common Password Field */}
              <div>
                <label className="text-sm font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password only in Signup */}
              {!isLogin && (
                <div>
                  <label className="text-sm font-medium text-gray-600">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
            </>
          )}

          {/* Extra Signup Fields */}
          {!isLogin && !isResetPassword && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                <input
                  type="date"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Phone</label>
                <input
                  type="number"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-600">Address</label>
                <input
                  type="text"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Forgot Password Link */}
          {isLogin && !isResetPassword && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsResetPassword(true)}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            {isResetPassword ? "Change Password" : isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch between forms */}
        {!isResetPassword && (
          <p className="mt-4 text-center text-sm text-gray-500">
            {isLogin ? (
              <>
                Dont have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-blue-600 hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-blue-600 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </p>
        )}
        {isResetPassword && (
          <p className="mt-4 text-center text-sm text-gray-500">
            Back to{" "}
            <button
              onClick={() => {
                setIsResetPassword(false);
                setIsLogin(true);
              }}
              className="text-blue-600 hover:underline">
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
