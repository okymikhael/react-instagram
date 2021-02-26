import React, { Component } from "react";
import { Form } from "./Form";
import { NavbarComponent } from "./NavbarComponent";
import { Table } from "./Table";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      id: "",
      nama: "",
      umur: 0,
      hobby: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleEdit = (id) => {
    const selected = this.state.user
      .filter((users) => users.id === id)
      .map((users) => {
        return users;
      });

    this.setState({
      id: selected[0].id,
      nama: selected[0].nama,
      umur: selected[0].umur,
      hobby: selected[0].hobby,
    });
  };

  handleDelete = (id) => {
    const remove = this.state.user
      .filter((users) => users.id !== id)
      .map((users) => {
        return users;
      });

    this.setState({
      user: remove,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        user: [
          ...this.state.user,
          {
            id: this.state.user.length + 1,
            nama: this.state.nama,
            umur: this.state.umur,
            hobby: this.state.hobby,
          },
        ],
      });
    } else {
      const update = this.state.user
        .filter((users) => users.id !== this.state.id)
        .map((users) => {
          return users;
        });

      this.setState({
        user: [
          ...update,
          {
            id: this.state.id,
            nama: this.state.nama,
            umur: this.state.umur,
            hobby: this.state.hobby,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      umur: 0,
      hobby: "",
      id: "",
    });
  };

  render() {
    // console.log(this.state.user);
    return (
      <div>
        <NavbarComponent />
        <Table
          user={this.state.user}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
