// EXAMPLE 1 - How to use Basic Auth with Axios in JavaScript

import axios from 'axios';

async function logUserIn() {
  try {
    const requestBody = {
      id: 1,
      name: 'bobby hadz',
      salary: 100,
    };

    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      requestBody,
      {
        auth: {
          username: 'YOUR_USERNAME',
          password: 'YOUR_PASSWORD',
        },

        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (err) {
    console.log(err.message);
    console.log(err.response.status);
  }
}

logUserIn().then(data => {
  console.log(data);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Example of using Basic Auth with `axios` with the `httpbin` API

// import axios from 'axios';

// async function logUserIn() {
//   try {
//     const response = await axios.get(
//       'https://httpbin.org/basic-auth/my-user/my-password',
//       {
//         auth: {
//           username: 'my-user',
//           password: 'my-password',
//         },
//       },
//     );

//     return response.data;
//   } catch (err) {
//     console.log(err.message);
//     console.log(err.response.status);
//   }
// }

// logUserIn().then(data => {
//   console.log(data);
// });
