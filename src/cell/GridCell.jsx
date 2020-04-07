import React from 'react';
import {getClassName} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-cell';

const GridCell = props => {
    const {
        value,
        onClick
    } = props;

    const onCellClick = () => {
        onClick && onClick(value);
    }

    return (
        <td
            className={getClassName(DEFAULT_CLASS_NAME, props.className)}
            onClick={onCellClick}
        >
            {value}
        </td>
    );
}

export default GridCell;