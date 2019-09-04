import React, {Component, Fragment} from 'react';
import TodoList from "./TodoList/TodoList";
import AddNewList from "./AddNewList/AddNewList";

export default class App extends Component {

    state = {
        lists: ['À faire', 'En cours', 'Fait']
    };

    render() {

        const { lists } = this.state;

        return (
            <Fragment>
                {
                    lists.map((item,i) => <TodoList key={i} header={item} />)
                }
              <AddNewList />
            </Fragment>
        );
    }
}
