import React from 'react';
import GridCell from '../cell/GridCell';
import {classNamer} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-header';

const GridHeader = props => {
    const {
        columns = []
    } = props;

    return (
        <thead>
            <tr
                className={classNamer(DEFAULT_CLASS_NAME, props.className)}
            >
                {columns.map(c => (
                    <GridCell
                        key={c.columnKey}
                        value={c.title}
                    />
                ))}
            </tr>
        </thead>
    );
}

export default GridHeader;