export const useGetUserInfo = () => {
  const { name, userId, profilePhoto } =
    JSON.parse(localStorage.getItem("userlogin")) || {};

  return { name, userId, profilePhoto };
};
