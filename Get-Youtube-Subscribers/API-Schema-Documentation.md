=>   Introduction

The API documentation for Get YouTube Subscribers provides details on how to interact with the API endpoints.

   Base URL
  http://localhost:3000
=>   Error Handling

In case of errors, the API will respond with error status codes and error messages.

Get Subscribers 
  
  Description: Retrieve a list of all subscribers.

  - Endpoint: `/subscribers`
  - Method: `GET`
  - Response:
    - Status Code: `200 OK`
    - Content-Type: `application/json`
  - for error
    - Status Code: `404`
    - Message: `Error`

Get Subscribers by Names
  
  Description: Retrieve subscribers based on their name.
  - Endpoint: `/subscribers/names `
  - Method: `GET`
  - Query :
    - `names`: The name of the subscribers.
  - Response:
    - Status Code: `200 OK`
    - Content-Type: application/json
    
  - for error
    - Status Code: `404`
    - Message: `No Name Found`

Get Subscriber by ID
    Description: Retrieve a specific subscriber based on ID.
  - Endpoint:`/subscribers/:id`
  - Method: `GET`
  -Query:
    - `id` (required): The ID of the subscriber to retrieve data.
  -Response:
    - Status Code: `200 OK`
    - Content-Type: `application/json`
    
  -Error:
    - Status Code: `400 (Bad Request)`
    - Message: `Not found.`
It also has frontend file to show API endpoints.








