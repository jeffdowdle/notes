import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ListItem from './ListItem';

storiesOf('ListItem', module)
    .add('default', () => (
        <ListItem onClick={action('clicked')}>List item</ListItem>
    ))
    .add('active', () => (
        <ListItem onClick={action('clicked')} active>List item</ListItem>
    ));
