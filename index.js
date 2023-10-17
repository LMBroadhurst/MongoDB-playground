const { MongoClient } = require("mongodb")
require('dotenv').config()
const uri = process.env.ATLAS_URI

const client = new MongoClient(uri)
const dbname = "TTTest"

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log(`Connected to ${dbname}`)
    } catch (err) {
        console.log(`Error connecting to ${dbname}`)
    }
}

const main = async () => {
    try {
        await connectToDatabase()
    } catch (err) {
        console.log(`Error connecting to DB: ${err}`)
    } finally {
        await client.close()
    }
}

main()