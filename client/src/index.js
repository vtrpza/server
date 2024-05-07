import ReactDOM from "react-dom/client";
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducers from "./components/reducers";

const store = createStore(() => reducers, {}, applyMiddleware());

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

