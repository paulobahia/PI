import api from "../service/api";

export const createUser = (payload) => {
  return api.put("", payload).then((i) => i.data);
};
