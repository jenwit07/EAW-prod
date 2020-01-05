import { observable, action, computed } from 'mobx';

class MenuStore {

    @observable showMenu = false;
    @observable pageRedirect = "Products";
    @observable menu = [
        {
          name: "Analysis",
          link: "analysis",
          fa: 'fa fa-line-chart text-white',
          size: '30px',
          color: 'red'
        },
        {
          name: "Products",
          link: "products",
          fa: 'fa fa-product-hunt text-white',
          size: '30px',
          color: 'blue'
        },
        {
          name: "Orders",
          link: "orders",
          fa: 'fa fa-shopping-cart text-white',
          size: '30px',
          color: 'orange'
        },
        {
          name: "Members",
          link: "members",
          fa: 'fa fa-users text-white',
          size: '30px',
          color: '#644A8C'
        }
      ]

    @action setToggleMenu() {
        this.showMenu = !this.showMenu;
    }

    @action setPageRedirect(page) {
        this.pageRedirect = page;
    }

    @action resetMenu() {
      this.pageRedirect = "Products";
      this.showMenu = false
    }

    @computed get getPageRedirect() {
      return this.pageRedirect;
  }

}

export default new MenuStore();