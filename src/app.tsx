import React from 'react';
import ReactDOM from 'react-dom';
import { whyDidYouUpdate } from 'why-did-you-update';
import { createHashHistory } from 'history';
import { Router, Switch, Route, Link } from 'react-router-dom';

import { routes } from '@/router/routes';
import AutoRouter from '@/router';
import '@/style/index.less';

import Loading from '@/components/loading';
import NoMatch from '@/components/no_match';

const history = createHashHistory();

if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
}

const Main = () => (
    <React.StrictMode>
        <Router history={history}>
            <AutoRouter
                renderLoading={Loading}
                renderNoMatch={NoMatch}
                navConfig={routes}
            />
        </Router>
    </React.StrictMode>
);

ReactDOM.render(<Main />, document.getElementById('root'));
