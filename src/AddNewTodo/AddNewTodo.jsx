import React, { Component } from 'react';
import styles from './AddNewTodo.module.scss';

export default class AddNewTodo extends Component {
    render() {

        return (
            <button className={styles.new}>
                + Ajouter une autre carte
            </button>
        );
    }
}
