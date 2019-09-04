import React, { Component } from 'react';
import styles from './AddNewList.module.scss';

export default class AddNewList extends Component {
    render() {

        return (
            <button className={styles.add}>
                <span className="placeholder">+ Ajoutez une autre liste</span>
            </button>
        );
    }
}
