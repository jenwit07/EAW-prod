import { observable, action, computed } from 'mobx';

class MenuStore {

    @observable isLoading = false;

    @action setLoading() {
        this.isLoading = !this.isLoading;
    }

}

export default new MenuStore();