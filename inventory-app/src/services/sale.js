import axios from "axios";

export class SaleService {
  constructor() {
    this.server = axios.create({
      baseURL: "http://localhost:5000/sale",
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
    return this.server.post("/addAll", data);
  }
}
