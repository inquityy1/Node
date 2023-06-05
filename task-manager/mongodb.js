// main().catch(console.error);
const { MongoClient } = require("mongodb");

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

// Database Name
const dbName = "task-manager";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  collection.insertMany(
    [
      {
        description: "Clean the house",
        status: true,
      },
      {
        description: "Renew inspection",
        status: false,
      },
      {
        description: "Pot plants",
        status: false,
      },
    ],
    (error, result) => {
      if (error) {
        return console.log("Unable to insert tasks!");
      }

      console.log(result.ops);
    }
  );

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
