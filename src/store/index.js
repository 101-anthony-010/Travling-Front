import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./slices/menu.slice";
import loginUserSlice from "./slices/loginUserSlice";

export default configureStore({
    reducer: {
      menuSlice,
      loginUserSlice
    }
})