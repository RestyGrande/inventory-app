import axios from "axios";

export class PurchaseService {
  constructor() {
    this.server = axios.create({
      baseURL: "http://localhost:5000/purchase",
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  getAll() {
    return this.server.get("/");
  }
  add(data) {
    return this.server.post("/add", data);
  }
  getOne(id) {
    return this.server.get(`/prod/${id}`);
  }
}
