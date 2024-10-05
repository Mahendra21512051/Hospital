import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // true for Login, false for Signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For Signup only

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login details:', { email, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Signup details:', { email, password });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && ( // Show confirm password field for Signup only
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="mb-2 text-sm font-medium text-gray-600">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            {isLogin && <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>}
          </div>
          <button
            type="submit"
            className="w-full p-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
