// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SearchResults from "./pages/SearchResults";
import "./styles/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Video} path="/video/:id" />
          <Route component={SearchResults} path="/results/:query" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
