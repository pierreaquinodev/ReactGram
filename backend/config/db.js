const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//Connection with mongo database

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.sa1rdha.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectado ao mongo database.");

        return dbConn;
    } catch (error) {
        console.log(error);
    }
};

conn();

module.exports = conn;
