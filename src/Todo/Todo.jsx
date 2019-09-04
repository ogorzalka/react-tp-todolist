import React, { Component } from 'react';
import styles from './Todo.module.scss';

export default class Todo extends Component {

    state = {
        todos : [ 'Ma tâche' ]
    };

    render() {

        const { todos } = this.state;

        return (
            todos.map((item,i) => <div key={i} className={styles.todo}>{item}</div>)

        );
    }
}
