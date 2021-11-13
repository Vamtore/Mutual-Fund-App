import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/Signin/Signin";
import ListingPage from "./Components/ListingPage/ListingPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/listingPage" component={ListingPage} />
        <Route exact path="/profileadd" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
