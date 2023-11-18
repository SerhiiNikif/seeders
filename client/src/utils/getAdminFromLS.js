export const getAdminFromLS = () => {
  const data = localStorage.getItem("admin");
  const user = data ? JSON.parse(data) : null;

  return {
    email: user?.email,
    isAuth: user?.isAuth,
    accessToken: user?.accessToken,
  }
}