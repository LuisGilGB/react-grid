import React, {useState} from 'react';
import Container from '@luisgilgb/react-container';
import Grid from '../../src/Grid';
import {DEMO_DATA} from './consts';
import './DemoApp.css';

const DemoApp = () => {
    const [multiSelection, allowMultiSelection] = useState(false);
    const [selection, setSelection] = useState('it');
    const [allowPropagation, setAllowPropagation] = useState(true);

    const selectionUpdaters = {
        single: (item) => {
            setSelection(item.countryId);
        },
        multi: (item) => {
            const {countryId} = item;
            selection.includes(countryId) ? setSelection(selection.filter(id => id !== countryId)) : setSelection([...selection, item.countryId]);
        }
    }

    const selectionMode = multiSelection ? 'multi' : 'single';

    const selectSpainHandlers = {
        single: () => {
            setSelection('es');
        },
        multi: (item) => {
            const {countryId} = item;
            !selection.includes('es') && setSelection([...selection, 'es']);
        }
    }

    return (
        <Container
            className="app"
        >
            <header className="app-header">
                <p>
                    Edit <code>src/DemoApp.js</code> and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Container
                className="app-body"
                layout="rowflex"
            >
                <Grid
                    data={DEMO_DATA}
                    columns={[
                        {
                            columnKey: 'countryId',
                            title: 'Country ID',
                            width: 120
                        },
                        {
                            columnKey: 'shortName',
                            title: 'Country short name',
                            width: 180
                        },
                        {
                            columnKey: 'name',
                            title: 'Country name',
                            minWidth: 300,
                            flex: 1,
                            renderFn: (value) => value.es
                        }
                    ]}
                    flex={1}
                    headerHeight={80}
                    rowHeight={50}
                    onItemClick={selectionUpdaters[selectionMode]}
                    onCellClick={(value, e) => {
                        !allowPropagation && e.stopPropagation();
                        console.log(value);
                    }}
                />
                <Container
                    minWidth={400}
                >
                    <button
                        onClick={() => {
                            const newMultiSelValue = !multiSelection;
                            allowMultiSelection(newMultiSelValue);
                            setSelection(newMultiSelValue ? [selection] : selection[0]);
                        }}
                    >
                        {`Selection mode at ${selectionMode}, click to toggle`}
                    </button>
                    <button
                        onClick={selectSpainHandlers[selectionMode]}
                    >
                        Selecciona España
                    </button>
                    <button
                        onClick={() => {
                            setAllowPropagation(!allowPropagation);
                        }}
                        style={{
                            color: allowPropagation ? 'green' : 'red'
                        }}
                    >
                        {`Click propagation from cell to row ${allowPropagation ? 'allowed' : 'forbidden'}, click to toggle`}
                    </button>
                </Container>
            </Container>
        </Container>
    );
}

export default DemoApp;
