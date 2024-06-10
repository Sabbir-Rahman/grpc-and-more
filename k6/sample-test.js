import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: '10s', target: 200 },
    { duration: '100s', target: 200 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  const response = http.get(
    "http://localhost:5000/large-array"
  );

  check(response, {
    'status is 200': (r) => r.status === 200,
   
  });

  sleep(.1);
}
