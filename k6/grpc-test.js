import grpc from "k6/net/grpc";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: '10s', target: 200 },
    { duration: '100s', target: 200 },
    { duration: '10s', target: 0 },
  ],
};

const client = new grpc.Client();
client.load(["./"], "largearray.proto");

export default () => {
  client.connect("localhost:50053", {
    plaintext: true,
  });

  const data = {};
  const response = client.invoke(
    "largearray.LargeArrayService/GetLargeArray",
    data
  );

  check(response, {
    "status is OK": (r) => r && r.status === grpc.StatusOK,
  });

  client.close();
  sleep(.1);
};
