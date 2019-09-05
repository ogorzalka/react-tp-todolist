import React, {Component, Fragment} from 'react';
import TodoList from "./TodoList/TodoList";
import Timer from "./../../components/Timer/Timer";
import PropTypes from 'prop-types';
import InputToggler from "./../../components/InputToggler/InputToggler";

class Home extends Component {

    state = {
        lists: ['À faire', 'En cours', 'Fait']
    }

    handleNewList = (text) => {
        this.setState(prevState => ({
            lists : [ ...prevState.lists, text ]
        }))
    }

    // fonction qui gère le rendu
    render() {

        const { lists } = this.state;  // on destructure this.state à la manière de la fonction "list" en php

        return (
            <Fragment>
                <Timer />
                {
                    // on boucle sur les items de la liste de todos (lists)
                    lists.map((item,i) => <TodoList key={i} header={item} />)
                }
                <InputToggler onClickSubmit={this.handleNewList} buttonTxt="Ajouter la liste">+ Ajoutez une autre liste</InputToggler>
            </Fragment>
        );
    }
}

TodoList.propTypes = {
    header: PropTypes.string
}

export default Home;
