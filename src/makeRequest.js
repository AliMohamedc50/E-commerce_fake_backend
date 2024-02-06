import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer " +
      "bbb76ba3ccbf2edf89e2c792da96b196928efbe6257a5534a7161fee4084f6d6b0047e04135bdb8f6fc992f27c0536da2879ce80355d28d175cce6c0e898388ddc237d9cc284765eff69373dc58aa37e455da24d293d1c54b9ac83d88bd7b85a19f08fada0185929804db7d0d25821d1b850fab7470da6afe201a6272d9d9471",
  },
});