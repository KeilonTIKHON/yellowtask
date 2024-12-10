export const getToken = (): string | null => {
    return localStorage.getItem('token');
  };
  
  export const setToken = (token: string): void => {
    localStorage.setItem('token', token);
  };
  
  export const clearToken = (): void => {
    localStorage.removeItem('token');
  };
  
  export const isAuthenticated = (): boolean => {
    const token = getToken();
    return !!token; // Возвращает true, если токен существует
  };
  