import React from 'react';
import GridHeader from './header/GridHeader';
import GridRow from './row/GridRow';
import {exists, isArray, isNonEmptyString, isFunction} from '@luisgilgb/js-utils';
import {classNamer} from '@luisgilgb/react-utils';
import './Grid.css';

const DEFAULT_CLASS_NAME = 'reactgrid';

const Grid = props => {
    const {
        data = [],
        columns,
        selection,
        selectBy,
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

    const isSelectedRow = (item, index) => {
        // Which one has better performance? Declaring the checker into isSelectedRow (one declaration each row but only when
        // isSelectedRow is called) or outside this function? I think the second one, but I don't have proofs.
        const checker = (sel) => {
            const matchSelection = key => exists(sel) && item[key] === sel;
            const selectByKey = key => matchSelection(isNonEmptyString(key) ? key : 'id');
        
            return !!(isFunction(selectBy) ? selectBy(sel, item, index) : selectByKey(selectBy));
        }
        return isArray(selection) ? selection.some(checker) : checker(selection);
    }

    const onRowClick = (item) => () => {
        onItemClick && onItemClick(item);
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
                        selected={isSelectedRow(item, index)}
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