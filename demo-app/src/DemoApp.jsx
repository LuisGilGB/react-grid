import React from 'react';
import Container from '@luisgilgb/react-container';
import Grid from '../../src/Grid';
import {DEMO_DATA} from './consts';
import './DemoApp.css';

function DemoApp() {
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
                />
                <Container
                    minWidth={300}
                >
                    Cosa
                </Container>
            </Container>
        </Container>
    );
}

export default DemoApp;
