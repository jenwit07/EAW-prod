import { observable, action, computed } from 'mobx';
import Cookies from 'js-cookie'

class CommonStore {

    @observable needLogIn = true;
    @observable isLoading = true;
    @observable accessToken = Cookies.get('authorization');
    @observable categoryList = JSON.parse(Cookies.get('category'));
    
    @action setLogInStatus() {
        this.needLogIn = !this.needLogIn;
    }

    @action setLoadingFlag() {
        this.isLoading = !this.isLoading;
    }

    @action setAccessToken(jwt) {
        this.accessToken = jwt;
    }

    // @action setCategory(_categoryList) {
    //     this.categoryList = _categoryList;
    // }

    @action resetAuth() {
        this.needLogIn = true;
        this.accessToken = null;
        Cookies.remove('authorization')
    }

    @computed get getGlobalHeaderJson() {
        return (
            {
                'Content-Type': 'application/json',
                'authorization': this.accessToken
            }
        );

    }

    @computed get getCategory() {
        this.categoryList = Cookies.get('authorization');
    }

}

export default new CommonStore();