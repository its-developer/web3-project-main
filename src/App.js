import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import NotFoundPage from "./Pages/NotFoundPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
