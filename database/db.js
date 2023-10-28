import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect( process.env.MONGODB_URI,
      
      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado com sucesso ao MongoDB"))
    .catch((err) => console.log(err));
};

export default connectToDb;
