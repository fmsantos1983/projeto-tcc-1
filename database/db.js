const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect( process.env.MONGODB_URL,
      
      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado com sucesso ao MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
