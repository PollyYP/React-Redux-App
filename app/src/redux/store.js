import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers/reducer";

const middleware = [logger, thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
