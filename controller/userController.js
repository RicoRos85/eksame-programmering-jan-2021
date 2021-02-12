const User = require("../models/users.js");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./localStorage");
const userData = "../userData.json";

// check if user exists
const checkUser = (newUserData) => {
  const data = localStorage.getItem("userData.json");
  let users = JSON.parse(data);
  console.log("-> ", newUserData.email);
  let obj = users.users.find((o) => o.email === newUserData.email);
  let index = users.users.indexOf(obj);

  index === -1 ? addNewUser(newUserData, users) : null;
  return users;
};

// add user.
const addNewUser = (newUser, oldUsers) => {
  let allUsers = { ...oldUsers };
  allUsers.users.push(newUser);
  localStorage.setItem("userData.json", JSON.stringify(allUsers));
  return null;
};

// login user
const loginUser = (user) => {
  const data = localStorage.getItem("userData.json");
  let users = JSON.parse(data);
  let obj = users.users.find((o) => o.email === user.email);
  let index = users.users.indexOf(obj);

  let loggedIn = false;

  if (index !== -1) {
    loggedIn = users.users[index].password === user.password ? true : false;
  }

  return loggedIn;
};

const isLoggedIn = (user) => {}
const logoutUser = (user) => {}
const updateUser = () => {}
const deleteUser = () => {}
const viewMatches = () => {}

module.exports = {
  checkUser,
  addNewUser,
  loginUser,
  isLoggedIn,
  logoutUser,
  updateUser,
  deleteUser,
  viewMatches
};