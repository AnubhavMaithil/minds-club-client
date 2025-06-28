import { Axios } from "@/Constants/MainContent";

export async function login(payload) {
  try {
    const response = await Axios.post(`/login`, payload);
    return response?.data;
  } catch (error) {
    return error?.response.data;
  }
}