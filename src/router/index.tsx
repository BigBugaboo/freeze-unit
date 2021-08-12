/**
 * @description 自动化路由获取
 */

import React, { FC, memo } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import _ from 'lodash';

import {
    NavConfigItem,
    RedirectBaseProps,
    AutoRouterProps,
} from './type';

const pages = import.meta.glob('/src/**/*.page*');

function getRouteList(Loading?: React.ComponentType<any>) {
    const routeList = _.map(Object.keys(pages), (key) => {
        // ./home/index.page.xxx => /home

        // slice(1) delete .
        // slice(0, -1) delete index.page.xxx
        // 剩下就是路由部分
        let pathArr = key.slice(1).split('/').slice(0, -1);
        // delete src
        pathArr.shift();
        return {
            path: `/${pathArr.join('/')}`,
            loader: pages[key],
        };
    });

    const RouteList = _.map(routeList, (v) => {
        // @ts-ignore
        const LoadableComponent = loadable(v.loader);

        return (
            <Route
                key={v.path}
                exact
                path={v.path}
                component={LoadableComponent}
            />
        );
    });

    return RouteList;
}

function getRedirect(navConfig: NavConfigItem[]) {
    const menus: RedirectBaseProps[] = [];
    _.each(navConfig, (one) => {
        if (one.sub?.length) {
            menus.push({
                from: one.link,
                to: one.sub[0].link,
            });

            _.each(one.sub, (two) => {
                if (two.sub?.length) {
                    menus.push({
                        from: two.link,
                        to: two.sub[0].link,
                    });
                }
            });
        }
    });

    return _.map(menus, (v) => {
        return <Redirect key={v.from} exact from={v.from} to={v.to} />;
    });
}

const AutoRouter: FC<AutoRouterProps> = ({
    navConfig,
    children,
    renderLoading,
    renderNoMatch,
}) => {
    return (
        <Switch>
            {children}
            {navConfig && getRedirect(navConfig)}
            {getRouteList(renderLoading)}
            <Route exact component={renderNoMatch} />
        </Switch>
    );
};

export default memo(AutoRouter);
