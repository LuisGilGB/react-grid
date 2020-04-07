import React from 'react';
import GridHeader from './header/GridHeader';
import GridRow from './row/GridRow';
import {classNamer} from '@luisgilgb/react-utils';
import './Grid.css';

const DEFAULT_CLASS_NAME = 'reactgrid';

const Grid = props => {
    const {
        data = [],
        columns,
        className,
        headerHeight,
        rowHeight,
        onItemClick,
        onCellClick
    } = props;

    const onRowClick = (item) => {
        return () => {
            onItemClick && onItemClick(item);
        }
    }

    return (
        <table
            className={classNamer(DEFAULT_CLASS_NAME, className)}
        >
            <GridHeader
                columns={columns}
                height={headerHeight}
            />
            <tbody>
                {data.map((item, index) => (
                    <GridRow
                        key={index}
                        item={item}
                        cells={columns}
                        height={rowHeight}
                        onClick={onRowClick(item)}
                        onCellClick={onCellClick}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Grid;