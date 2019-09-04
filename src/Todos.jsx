import React, { Component } from 'react';

export default class Todos extends Component {
    render() {
        return (
            <strong>
                {this.props.message}
            </strong>
        );
    }
}
