import React, { FC } from 'react';
import { LoadingComponentProps } from 'react-loadable';

const Loading: FC<LoadingComponentProps> = (props) => {
    const { retry, error } = props;
    if (error) {
        return (
            <div
                style={{
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                发生了错误！
                <button onClick={retry}>重试</button>
            </div>
        );
    } else {
        return <div className='text-center gm-padding-20'>加载中...</div>;
    }
};

export default Loading;