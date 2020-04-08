import React from 'react';
import {classNamer} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-cell';

const GridCell = props => {
    const {
        value,
        item,
        width,
        height,
        minWidth,
        maxWidth,
        flex,
        renderFn,
        onClick
    } = props;

    const onCellClick = (...eventParams) => {
        onClick && onClick(value, ...eventParams);
    }

    return (
        <td
            className={classNamer(DEFAULT_CLASS_NAME, props.className)}
            style={{
                width,
                height,
                minWidth,
                maxWidth,
                flex
            }}
            onClick={onCellClick}
        >
            {renderFn ? renderFn(value, item) : value}
        </td>
    );
}

export default GridCell;