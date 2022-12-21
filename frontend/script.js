let user = {
  id: '',
  name: '',
  email: '',
  username: '',
  list: [],
};
// save in local storage as JSON
localStorage.setItem('user', JSON.stringify(user));
