import React from 'react';
import classNames from 'classnames';
import './ListItem.css';

export default class ListItem extends React.Component {
    render() {
        const classes = classNames({
            'ListItem': true,
            'ListItem--active': this.props.active,
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}