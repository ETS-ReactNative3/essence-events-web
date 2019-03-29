import { observable } from 'mobx';

let authStore = observable({
  authToken: ''
});

export default authStore;
