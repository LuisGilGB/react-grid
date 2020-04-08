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
        width,
        height,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        flex,
        style,
        headerHeight,
        rowHeight,
        onItemClick,
        onCellClick,
        ...otherProps
    } = props;

    const onRowClick = (item) => {
        return () => {
            onItemClick && onItemClick(item);
        }
    }

    return (
        <table
            {...otherProps}
            className={classNamer(DEFAULT_CLASS_NAME, className)}
            style={{
                ...style,
                width,
                height,
                minWidth,
                maxWidth,
                minHeight,
                maxHeight,
                flex
            }}
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