import api from "../service/api";

export const createUser = (payload) => {
  return api.put('/api/Users',payload).then((i) => i.data);
};
