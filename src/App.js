import React, {Component, Fragment} from 'react';
import TodoList from "./TodoList/TodoList";
import AddNewList from "./AddNewList/AddNewList";

export default class App extends Component {

    state = {
        lists: ['À faire', 'En cours', 'Fait']
    };

    // fonction qui gère le rendu
    render() {

        const { lists } = this.state;  // on destructure this.state à la manière de la fonction "list" en php

        return (
            <Fragment>
                {
                    // on boucle sur les items de la liste de todos (lists)
                    lists.map((item,i) => <TodoList key={i} header={item} />)
                }
              <AddNewList />
            </Fragment>
        );
    }
}
