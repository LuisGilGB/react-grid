import React, {useState} from 'react';
import Container from '@luisgilgb/react-container';
import Grid from '../../src/Grid';
import {DEMO_DATA} from './consts';
import './DemoApp.css';

const DemoApp = props => {
    const [selection, setSelection] = useState('it');
    const [allowPropagation, setAllowPropagation] = useState(true);

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
                    selection={selection}
                    selectBy="countryId"
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
                    onItemClick={(item) => {
                        setSelection(item.countryId);
                    }}
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
                            setSelection('es');
                        }}
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
