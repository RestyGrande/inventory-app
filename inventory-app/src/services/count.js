import axios from "axios";

export class CountService {
  constructor() {
    this.server = axios.create({
      baseURL: "http://localhost:5000/count",
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  getAll() {
    return this.server.get(`/`);
  }
}
