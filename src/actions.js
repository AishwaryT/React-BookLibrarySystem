import { FORMSUBMIT } from "./actionTypes";

let nextBookId = 0;
export const formsubmit = book => ({
  type: FORMSUBMIT,
  id: nextBookId++,
  book: book
});
