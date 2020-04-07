import React from 'react';
import Grid from '../../src/Grid';
import {DEMO_DATA} from './consts';
import './DemoApp.css';

function DemoApp() {
    return (
        <div className="app">
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
                        renderFn: (value, item) => value.es
                    }
                ]}
            />
        </div>
    );
}

export default DemoApp;
