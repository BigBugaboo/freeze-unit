import React, { FC, useMemo } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './index.less';
import { flat } from './utils';
import { NavProps } from './type';

const Nav: FC<NavProps> = ({ data }) => {
    const list = useMemo(() => flat(data), data);

    return (
        <div className='fu-nav'>
            {_.map(list, ({ link, text, level }) => (
                <div
                    className={classNames(
                        'fu-nav-item',
                        `fu-nav-item-level-${level}`
                    )}
                    key={link + text}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};

export default Nav;
