import { observable } from 'mobx';

// TODO: configure store
let authStore = observable({
  authToken: ''
});

export default authStore;
