import React from 'react';
import GridCell from '../cell/GridCell';
import {getClassName} from '@luisgilgb/react-utils';

const DEFAULT_CLASS_NAME = 'reactgrid-header';

const GridHeader = props => {
    const {
        columns = []
    } = props;

    return (
        <thead>
            <tr
                className={getClassName(DEFAULT_CLASS_NAME, props.className)}
            >
                {columns.map(c => (
                    <GridCell
                        key={c.fieldName}
                        value={c.title}
                    />
                ))}
            </tr>
        </thead>
    );
}

export default GridHeader;