import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
//npm install -g json-server
//json-server --watch api/db.json -serveri ayağa kaldırmaya yarıyor

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <AddUser/>

        <Users />
      </div>
    );
  }
}

export default App;
