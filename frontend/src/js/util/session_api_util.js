export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3001/api/users',
    data: user,
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3001/api/session',
    data: user,
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:3001/api/session',
  });
};
