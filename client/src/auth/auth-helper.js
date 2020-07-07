const auth = {
  authenticate(jwt, cb) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('jwt', JSON.stringify(jwt));
      cb();
    }
  },

  isAuthenticated() {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('jwt')) {
      return JSON.parse(localStorage.getItem('jwt'));
    } else {
      return false;
    }
  },

  clearJWT(cb) {
    if (typeof window != 'undefined') localStorage.removeItem('jwt');
    cb();
  },
};

export default auth;
