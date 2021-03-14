import _ from 'lodash';
import { itemType, flatItemType } from './type';

export const flat = (data: itemType[], level = 1): flatItemType[] => {
    if (!data.length) {
        return data;
    }

    return _.reduce(
        data,
        (res, item) => {
            res.push({ ...item, level });

            if (item.child) {
                res.push(...flat(item.child, level + 1));
            }

            return res;
        },
        [] as flatItemType[]
    );
};
