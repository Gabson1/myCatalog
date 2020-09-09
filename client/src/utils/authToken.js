export const getStoredAuthToken = () => localStorage.getItem('user');

export const storeAuthToken = token => localStorage.setItem('user', token);

export const removeStoredAuthToken = () => localStorage.removeItem('user');
