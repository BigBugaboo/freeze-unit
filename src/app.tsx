import React from 'react';
import ReactDOM from 'react-dom';
import { whyDidYouUpdate } from 'why-did-you-update';
import { createHashHistory } from 'history';
import { Router, Switch, Route, Link } from 'react-router-dom';

import AutoRouter from '@/router';
import '@/style/index.less';

const history = createHashHistory();

if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
}

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <div>
                <ul>
                    <li>
                        <i onClick={() => { history.replace('/src/page/home')}}>Home</i>
                    </li>
                    <li>
                        <i onClick={() => { history.replace('/src/page/about')}}>Users</i>
                    </li>
                </ul>
            </div>
            <AutoRouter />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
