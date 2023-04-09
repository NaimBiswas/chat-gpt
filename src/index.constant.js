module.exports  = {
    // API:'http://localhost:3001/chat',
    API:"https://chat-gpt-api-kappa.vercel.app/chat",
    codeText:"\n\n// Connect to MongoDB\nconst MongoClient = require('mongodb').MongoClient;\n\n// Replace the following URL with the URL of your own MongoDB\nconst url = 'mongodb://localhost:27017';\n\n// Database Name\nconst dbName = 'myDatabase';\n\n// Create a new MongoClient\nconst client = new MongoClient(url);\n\n// Use connect method to connect to the Server\nclient.connect(function(err) {\n  if (err) {\n    console.log('Error connecting to MongoDB server:', err);\n  } else {\n    console.log('Connected to MongoDB server');\n\n    const db = client.db(dbName);\n\n    // Perform operations on the database\n    // ...\n\n    // Close connection\n    client.close();\n  }\n});"
}
