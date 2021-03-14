import React from 'react';
import ReactDOM from 'react-dom';
import Page from '@/common/page';
import Nav from '@/common/nav';
import { whyDidYouUpdate } from 'why-did-you-update';
import '@/style/index.less'

if (process.env.NODE_ENV !== 'production') {
    whyDidYouUpdate(React);
}

const navConfig = [
    {
        text: '1',
        link: '',
        child: [{ text: '2', link: '' }],
    },
    {
        text: '3',
        link: '',
        child: [
            {
                text: '3-1',
                link: '',
            },
        ],
    },
];

ReactDOM.render(
    <React.StrictMode>
        <Page>
            <Nav data={navConfig} />
        </Page>
    </React.StrictMode>,
    document.getElementById('root')
);
