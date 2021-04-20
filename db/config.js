const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fuwsk.mongodb.net/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );

    console.log("DB Conection Ok");
  } catch (error) {
    console.log(error);
    throw new Error("Error el iniciar DB");
  }
};

module.exports = {
  dbConnection,
};
