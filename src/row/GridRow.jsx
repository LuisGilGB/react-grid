import React from 'react';
import GridCell from '../cell/GridCell';
import {classNamer} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-row';

const GridRow = props => {
    const {
        item,
        cells = [],
        height,
        onClick,
        onCellClick
    } = props;

    const onRowClick = () => {
        onClick && onClick(item);
    }

    return (
        <tr
            className={classNamer(DEFAULT_CLASS_NAME, props.className)}
            onClick={onRowClick}
        >
            {cells.map(c => (
                <GridCell
                    key={c.columnKey}
                    value={item[c.columnKey]}
                    item={item}
                    width={c.width}
                    height={height}
                    minWidth={c.minWidth}
                    maxWidth={c.maxWidth}
                    flex={c.flex}
                    renderFn={c.renderFn}
                    onClick={onCellClick}
                />
            ))}
        </tr>
    );
}

export default GridRow;