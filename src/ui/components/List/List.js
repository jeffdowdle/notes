import React from 'react';
import classNames from 'classnames';
import './List.css';

export default class List extends React.Component {
    render() {
        const classes = classNames({
            'List': true,
            'List--active': this.props.active,
        });

        return (
            <ol className={classes}>
                {React.Children.map(this.props.children, (child) => {
                    return (
                        <li>
                            {child}
                        </li>
                    );
                })}
            </ol>
        )
    }
}