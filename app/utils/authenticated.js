import fb from './firebaseUtils';


function requireAuth(nextState, replace) {
  if (!fb.isLoggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireNonAuth(nextState, replace) {
    if (fb.isLoggedIn()) {
      let auth = fb.base.getAuth();
      replace({
        pathname: '/dashboard',
        state: { nextPathname: nextState.location.pathname }
      })
    }
}


module.exports = {requireAuth, requireNonAuth};