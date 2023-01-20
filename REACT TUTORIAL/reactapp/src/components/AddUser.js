import React, { Component } from "react";
import posed from "react-pose"; //npm install react-pose
import UserConsumer from "../context";

var uniqid = require("uniqid"); //npm install uniqid

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

class AddUser extends Component {
  state = {
    isvisible: false,
    name: "",
    department: "",
    salary: "",
  };

  changeVisibilty = (e) => {
    this.setState({
      isvisible: !this.state.isvisible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // getMaxId = (e) => {
  //     var users = this.state.users;
  //     var maxId = 0;
  //     users.forEach((user) => {
  //       if (user.id > maxId) {
  //         maxId = id;
  //       }
  //     });
  //     return maxId;
  //   };

  addUser = (dispatch, e) => {
    e.preventDefault();
    console.log("preventDefault metotu sayesinde sayfa tekrar yenilenmiyor");
    const { isvisible, name, department, salary } = this.state;

    const newUser = {
      // id: getMaxId() + 1,
      id: uniqid(),
      //   name: name,
      //   department: department,
      //   salary: salary,
      name,
      department,
      salary,
    };

    dispatch({ type: "ADD_USER", payload: newUser });
  };

  render() {
    const { isvisible, name, department, salary } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibilty}
                className="btn btn-dark btn-block mb-2"
              >
                {isvisible ? "Hide Form" : "Show Form"}
              </button>
              <Animation pose={isvisible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="id"
                          placeholder="Enter Name"
                          className="form-control"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input
                          type="text"
                          name="department"
                          id="department"
                          placeholder="Enter department"
                          className="form-control"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="salary">salary</label>
                        <input
                          type="text"
                          name="salary"
                          id="id"
                          placeholder="Enter salary"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        className="btn btn-danger btn-block"
                        type="submit"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
