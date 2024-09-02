import { createContext } from "react";

const user = createContext({
  userName: "John Doe",
  changeName: (state, action) => {
    console.log(state.userName);
  }
});

export default user;
