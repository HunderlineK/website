import { atom } from "recoil";

export const contentState = atom({
  key: "contentState", // unique ID (with respect to other atoms/selectors)
  default: "" // default value (aka initial value)
});
