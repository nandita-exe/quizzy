import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz/:id" component={Quiz} />
            <PrivateRoute exact path="/result/:id" component={Result} />
            {/* <Route exact path="/leaderboard" component={Leaderboard} /> */}
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
