Introduction
Get YouTube Subscribers is an Application that serves as a RESTful API created by using Mongodb in Node.js. It is designed to fetch all subscribers information.

Tech Stack
- Node.js: A runtime environment that execute javaScript code on the server-side.
- Express.js: A node.js framework for building web application and RESTful API.
- MongoDB: Is NoSQL Database system that stores and manage data in JSON-like format.

 Install the required dependencies:
    
     npm install
    
   - Create a .env file.
   - Add the environment variables to the .env file:
       PORT=3000                            
       DATABASE_URI=        
    
      npm run createDB

 Start server:
     npm start
    > http://localhost:3000 (base URL)


APIs

/subscribers: Retrieve a list of all subscribers.
/subscribers/names: Obtain subscribers name along with the channel.
/subscribers/id: Access subscriber information based on their ID.

It also has frontend file to show API endpoints.








