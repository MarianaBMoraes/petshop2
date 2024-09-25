import db from "../config/db.js";

const agendamentoSchema = new db.Schema({
  data: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  id_animal: {
    type: String,
    ref: "Animal",
    required: true,
  },
});

const Agendamento = db.model("Agendamento", agendamentoSchema);

export default Agendamento;
