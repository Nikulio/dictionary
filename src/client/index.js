import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk"; // no
import { Router } from "react-router-dom";

import reducers from "./reducers";
import theme from "./config/theme";
import history from "./config/history";
import axiosConfig from "./config/axios";
import App from "./components/App/index";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, reduxDevTools, applyMiddleware(ReduxThunk));

axiosConfig.store = store;

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</Router>
	</Provider>,
	document.querySelector("#root"),
);
