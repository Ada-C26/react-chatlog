export const getCountLikes = (entries) => {
  return entries.filter((entry) => entry.liked).length;
};
