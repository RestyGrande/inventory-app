import axios from "axios";

export class IncomeStatementService {
  constructor() {
    this.server = axios.create({
      baseURL: "http://localhost:5000/incomeStatement",
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  getAll(startDate, endDate) {
    return this.server.get(`/${startDate}/${endDate}`);
  }
}
