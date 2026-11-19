import { PERSON_COLORS } from './constants';

export const getCountLikes = (entries) => {
  return entries.filter((entry) => entry.liked).length;
};


export const getPersonsInChat = (entries) => {
  const senders = entries.map((entry) => entry.sender);
  return [...new Set(senders)];
};

export const getDefaultColors = (entries) => {
  const colors = {};
  
  getPersonsInChat(entries).forEach((person, index) => {
    colors[person] = PERSON_COLORS[index];
  });
  
  return colors;
};
