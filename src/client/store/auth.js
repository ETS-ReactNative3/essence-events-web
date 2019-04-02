import { observable } from 'mobx';

// TODO: configure store
class AuthStore {
  @observable token = '';
}

export default AuthStore;