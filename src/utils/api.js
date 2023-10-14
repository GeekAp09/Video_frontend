import axios from "axios";

// const serverApi = "http://localhost:5002/api";
const serverApi = "https://adelaide-emu-zbrs.2.us-1.fl0.io/api";

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${serverApi}/get-turn-credentials`);
  return response.data;
};
