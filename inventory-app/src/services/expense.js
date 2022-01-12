import axios from "axios";

export class ExpenseService {
  constructor() {
    this.server = axios.create({
      baseURL: "http://localhost:5000/expense",
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
}
