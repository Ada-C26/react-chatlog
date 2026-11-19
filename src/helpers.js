export const getCountLikes = (entries) => {
  return entries.filter((entry) => entry.liked).length;
};


export const getPersonsInChat = (entries) => {
  const senders = entries.map((entry) => entry.sender);
  return [...new Set(senders)];
};