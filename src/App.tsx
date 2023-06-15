import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/login/Login";
import Movies from "./components/movies/Movies";
import Signup from "./components/signup/Signup";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/movies" component={Movies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
