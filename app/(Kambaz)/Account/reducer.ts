import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: {
    "_id": "0",
    "username": "",
    "password": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "dob": "",
    "role": "",
    "loginId": "",
    "section": "",
    "lastActivity": "",
    "totalActivity": ""
  }
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;