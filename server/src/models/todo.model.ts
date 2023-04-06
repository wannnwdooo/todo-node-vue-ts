import { model, Schema } from "mongoose";

interface ITodo {
  done: boolean;
  text: string;
  expired: Date;
}

const TodoSchema = new Schema<ITodo>({
  done: { type: Boolean, required: true },
  text: { type: String, required: true },
  expired: { type: Date, required: true },
});

export default model("Todo", TodoSchema);
