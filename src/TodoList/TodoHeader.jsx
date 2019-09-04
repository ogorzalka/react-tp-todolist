import React, { Component } from 'react';
import styles from "./TodoList.module.scss";

class TodoHeader extends Component {
    render() {

        return (
            <div className={styles.header}>
                {this.props.children}
            </div>
        );
    }
}

export default TodoHeader;
