import {ObjectId} from "mongodb";

export default class TodoDto {
  done: boolean;
  text: string;
  expired: Date;
  id: ObjectId

  constructor(model) {
    this.done = model.done;
    this.text = model.text;
    this.expired = model.expired;
    this.id = model._id
  }
}
