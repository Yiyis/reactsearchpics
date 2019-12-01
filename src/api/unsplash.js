import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 481745d4d64150145b4df6ac5dd865953e76334ad730e75b49a44443e0df0efb"
  }
});
