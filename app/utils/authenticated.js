import {base, firebaseUtils} from './firebaseUtils';

function requireAuth(nextState, replace) {
  if (!firebaseUtils.isLoggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireNonAuth(nextState, replace) {
    if (firebaseUtils.isLoggedIn()) {
      let auth = base.getAuth();
      replace({
        pathname: '/user/' + auth.uid,
        state: { nextPathname: nextState.location.pathname }
      })
    }
}

module.exports = {requireAuth, requireNonAuth};