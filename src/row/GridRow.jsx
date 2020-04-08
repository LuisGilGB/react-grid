import React from 'react';
import GridCell from '../cell/GridCell';
import {classNamer} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-row';
const SELECTED_CLASS_NAME = `${DEFAULT_CLASS_NAME}-selected`;

const GridRow = props => {
    const {
        item,
        cells = [],
        selected = false,
        height,
        onClick,
        onCellClick
    } = props;

    const onRowClick = () => {
        onClick && onClick(item);
    }

    return (
        <tr
            className={classNamer(DEFAULT_CLASS_NAME, props.className, {
                className: SELECTED_CLASS_NAME,
                check: selected
            })}
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