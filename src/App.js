import React, {Component, Fragment} from 'react';
import TodoList from "./TodoList/TodoList";
import AddNewList from "./AddNewList/AddNewList";

export default class App extends Component {
  render() {

    return (
        <Fragment>
          <TodoList />
          <AddNewList />
        </Fragment>
    );
  }
}
