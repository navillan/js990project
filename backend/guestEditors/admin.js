import express from "express";

const admin = [{ username: "admin", password: "1234" }];

export const checkAdminCredentials = (username, password) => {
  return admin.some(
    (user) => user.username === username && user.password === password
  );
};

export const getAdmin = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password required." });
  }
  const isValid = checkAdminCredentials(username, password);
  if (isValid) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials." });
  }
};
