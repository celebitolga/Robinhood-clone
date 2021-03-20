import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "../features/stocks/stocksSlice";

export default configureStore({
  reducer: {
    stocks: stockReducer,
  },
});
