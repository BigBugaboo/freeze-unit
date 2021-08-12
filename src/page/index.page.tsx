import React, { FC } from 'react';

import store from './mobx';
import { observer } from "mobx-react-lite"

const Page: FC = observer(() => {
    return <div>
      {JSON.stringify(store.title)}
      <button onClick={() => store.changeTitle()}>更新</button>
      </div>;
});

export default Page;
