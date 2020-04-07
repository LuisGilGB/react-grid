import React from 'react';
import {classNamer} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-cell';

const GridCell = props => {
    const {
        value,
        item,
        renderFn,
        onClick
    } = props;

    const onCellClick = () => {
        onClick && onClick(value);
    }

    return (
        <td
            className={classNamer(DEFAULT_CLASS_NAME, props.className)}
            onClick={onCellClick}
        >
            {renderFn ? renderFn(value, item) : value}
        </td>
    );
}

export default GridCell;