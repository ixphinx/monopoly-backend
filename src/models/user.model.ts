import { Schema, Document } from 'mongoose';

export interface User extends Document {
  user: string;
  email: string;
  password: string;
  collectionsId: Array<number>;
  cards: [
    {
      id: number;
      deckId: number;
    },
  ];
}

export const UserSchema = new Schema({
  user: String,
  email: String,
  password: String,
  collectionsId: Array<Number>,
  cards: [
    {
      id: Number,
      deckId: Number,
    },
  ];
});
