import Rebase from 're-base';

let base = Rebase.createClass('https://speizer.firebaseio.com');

let firebaseUtils = {
  isLoggedIn() {
    return base.getAuth();
  }
}

module.exports = {base, firebaseUtils}
