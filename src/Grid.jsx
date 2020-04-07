import React from 'react';
import './Grid.css';

const DEFAULT_CLASS_NAME = 'react-grid';

const Grid = props => {
    const {
        children,
        className = '',
        style,
        onClick,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={`${DEFAULT_CLASS_NAME} ${className}`.trim()}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default Grid;