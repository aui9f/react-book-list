
import './App.css';
import './syltes/common.scss';
import Home from './routes/Home'
import About from './routes/About'
import BookList from './routes/BookList'
import Review from './routes/Review'

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header'
import MainMenu from './components/MainMenu';
function App() {
  return (
    <div>
     

      <main>
      <BrowserRouter >
      <Header/>
      <MainMenu/>
        <Switch>

        
        <Route path="/about"><About/></Route>
        <Route path="/booklist"><BookList/></Route>
        <Route path="/review"><Review/></Route>
        <Route path="/"><Home/></Route>

        </Switch>
    </BrowserRouter >
      </main>
    </div>
  );
}

export default App;
