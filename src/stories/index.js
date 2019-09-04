import React from 'react';

import './../index.scss';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import styles from "../AddNewList/AddNewList.module.scss";
import TodoList from "../TodoList/TodoList";
import Todo from "../Todo/Todo";
import AddNewList from './../AddNewList/AddNewList';
import AddNewTodo from './../AddNewTodo/AddNewTodo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Todolist', module)
    .add('par défaut', () => <TodoList header="À faire" />);

storiesOf('Todo', module)
    .add('par défaut', () => <Todo />);

storiesOf('Ajout liste', module)
    .add('par défaut', () => <AddNewList onClick={action('clicked')} className={styles.add}>
        <span className="placeholder">+ Ajoutez une autre liste</span>
    </AddNewList>);

storiesOf('Ajout tâche', module)
    .add('par défaut', () => <AddNewTodo />);
