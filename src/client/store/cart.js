import { observable } from 'mobx';

// TODO: configure store
class CartStore {
  @observable cart = [];
}

export default CartStore;