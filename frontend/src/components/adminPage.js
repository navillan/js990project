import React, { useState, useEffect } from "react";
import UseGuests from "../hooks/useGuests.js";
import AdminPaneli from "./adminPaneli.js";
import useCheckAdmin from "../hooks/useCheckAdmin.js";

const AdminPage = () => {

  const { guests } = UseGuests();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { validate, isValid, loading, error } = useCheckAdmin();
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("adminLoggedIn") === "true"
  );  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await validate(username, password);
    console.log("login1:", success);
    
    if (success) {
      setIsLoggedIn(true);
      localStorage.setItem("adminLoggedIn", "true");
      console.log("yeniLog:", success, isLoggedIn);
      
    } else {
      setIsLoggedIn(false);
      localStorage.removeItem("adminLoggedIn");
      alert("Kullanıcı adı veya parola hatalı.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
    setUsername("");
    setPassword("");
    window.location.reload();
  };

  return (
    <div className="container">
      {!isLoggedIn && (
        <div className="login-box">
          <h2>Project Restaurant Admin Sayfası</h2>
          <form onSubmit={handleLogin}>
            <div className="user-box">
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
              <label>Kullanıcı Adı</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <label>Parola</label>
            </div>
            <div className="user-button">
              <button className="btn btn-admin-login" type="submit">Giriş</button>
            </div>
          </form>
        </div>
      )}
      {isLoggedIn && (        
        <div className="admin-page-container">
          <button type="button" className="btn btn-default btn-log-out" onClick={handleLogout}>
          <span className="glyphicon glyphicon-log-out"></span>Oturumu Kapat
          </button>
          <AdminPaneli />
        </div>
      )}
    </div>
   )
}
  

export default AdminPage;