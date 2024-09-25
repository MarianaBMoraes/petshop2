import db from "../config/db.js";

const animalSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: true,
  },
  especie: {
    type: String , 
    enum: ["GOLDEN", "LABRADOR", "LHASA", "LULU", "DAMALTA", "HUSKI", "SRD"],
    required: true,
    default: "SRD",
  }
});

const Animal = db.model("Animal", animalSchema);

export default Animal;
