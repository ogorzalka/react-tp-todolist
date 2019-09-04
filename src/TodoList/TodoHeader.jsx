import React, { Component } from 'react';
import styles from "./TodoList.module.scss";

export default class TodoHeader extends Component {
    render() {

        return (
            <div className={styles.header}>
                {this.props.children}
            </div>
        );
    }
}
