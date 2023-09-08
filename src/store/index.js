import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./slices/menu.slice";

export default configureStore({
    reducer: {
      menuSlice,
    }
})