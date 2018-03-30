import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import List from './List';
import ListItem from '../ListItem';

storiesOf('List', module)
    .add('default', () => {
        return (
            <List>
                <ListItem>Thing 1</ListItem>
                <ListItem>Thing 2</ListItem>
                <ListItem>Thing 3</ListItem>
            </List>
        )
    })
    .add('active', () => (
        <List onClick={action('clicked')} active>List item</List>
    ));
