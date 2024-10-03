import { createContext } from "react";

const user = createContext({
  userName: "",
  changeName: (state, action) => {
    console.log(state.userName);
  }
});

export default user;
