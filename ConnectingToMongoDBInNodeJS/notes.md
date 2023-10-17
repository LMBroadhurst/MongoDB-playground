## Driver
- Works in tandem with the built in node.json BSON package to interact with the mongoDB server
- Async Driver, specific for JS
- Allow to set specific settings related to things such as security
- Must use official driver
- Simplify connecting to and interacting with mongoDB databases
- Adhere to specified programming languages best practises

## Connecting to Atlas Cluster
- Follow connect to node.js video, code is included in this repo too.
- An application should use a single MongoClient instance for all db requests
- Note the password is setup in Atlas, it is not the login password for my MongoDB account