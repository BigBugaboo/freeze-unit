import { makeObservable, observable, action } from 'mobx';

class Store {
    title = 'This is title of demo';

    constructor() {
        makeObservable(this, {
            title: observable,
            changeTitle: action,
        });
    }

    changeTitle() {
        console.log(this)
        this.title = 'title is change'
    }
}

export default new Store();
