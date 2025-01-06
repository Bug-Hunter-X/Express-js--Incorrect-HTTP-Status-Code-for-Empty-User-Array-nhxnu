# Express.js: Incorrect HTTP Status Code for Empty User Array

This repository demonstrates a common error in Express.js APIs: returning a 404 status code when an array of resources is empty.

The bug is in the `/users` route handler.  When no users are found, it incorrectly returns a 404 (Not Found) status code.  A 200 (OK) status code with an empty array is the correct response, as the request was successful, even if no data was returned.

The solution provides a corrected version that addresses this error.