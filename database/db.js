const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@cluster0.5kmpsit.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado com sucesso ao MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
