import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Users from "./components/Users/Users";
import Form from "./components/Users/UsersForm";
import { fetchUsers } from "./store/actions/actions";
import { Provider } from "react-redux";
import store from "./store";
store.dispatch(fetchUsers());

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />

				<Routes>
					<Route path={"/users"} element={<Users />} />
					<Route path={"/users/:id"} element={<Form />} />
					<Route path={"/addUser"} element={<Form />} />
					<Route path='/' element={<Navigate replace to='/users' />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
