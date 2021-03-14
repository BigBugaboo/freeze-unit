import React, { FC, useMemo } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

import './index.less';
import { flat } from './utils';
import { NavProps } from './type';

const Nav: FC<NavProps> = ({ data, container }) => {
    const list = useMemo(() => flat(data), data);

    return (
        <div className='fu-nav-box'>
            <ul className='fu-nav'>
                {_.map(list, ({ link, text, level }) => (
                    <li
                        className={classNames(
                            'fu-nav-item',
                            `fu-nav-item-level-${level}`
                        )}
                        key={link + text}
                    >
                        {text}
                    </li>
                ))}
            </ul>
            <span className='fu-nav-container'>{container}</span>
        </div>
    );
};

export default Nav;
