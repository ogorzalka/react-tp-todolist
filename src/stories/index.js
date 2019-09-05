import React from 'react';

import './../index.scss';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import InputToggler from "../components/InputToggler/InputToggler";
import Button from "../components/Button/Button";


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('InputToggler', module)
    .add('par défaut', () => <InputToggler buttonTxt="Ajouter la carte">+ Ajouter une autre carte</InputToggler>);

storiesOf('Button', module)
    .add('par défaut', () => <Button type="submit">Mon texte</Button>)
    .add('primaire', () => <Button type="submit" mode="primary">Mon texte</Button>);

