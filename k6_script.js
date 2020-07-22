/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    // { duration: '1m', target: 10 },
    // { duration: '1m', target: 1000 },
    // { duration: '1m', target: 1500 },
    // { duration: '10s', target: 0 },

    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 1500 },
    { duration: '30s', target: 2000 },
  ],
};

export default function () {
  // group('Get Request testing', () => {
  //   const roomId = Math.floor(Math.random() * 10000000);
  //   const res = http.get(`http://localhost:3004/api/${roomId}/photogallery`);
  //   check(res, { 'status was 200': (r) => r.status === 200 });
  // });
  // sleep(1);

  const roomId = Math.floor(Math.random() * 10000000);
  const res = http.get(`http://localhost:3004/api/${roomId}/photogallery`);
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
