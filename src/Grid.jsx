import React from 'react';
import GridHeader from './header/GridHeader';
import GridRow from './row/GridRow';
import {classNamer} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid';

const Grid = props => {
    const {
        data = [],
        columns,
        className,
        onItemClick
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
            <GridHeader columns={columns} />
            <tbody>
                {data.map((item, index) => (
                    <GridRow
                        key={index}
                        item={item}
                        cells={columns}
                        onClick={onRowClick(item)}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Grid;