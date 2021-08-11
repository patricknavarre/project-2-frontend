import logo from './logo.svg';
import './App.css';
import Application from './components/Apply';
import Header from './components/Header'
import MainRouter from './MainRouter';
// import { Provider } from 'react-redux';
// import { reduxStore } from './redux-state/redux-store';


function App() {
  return (
    // <Router>
    //  <Provider store={reduxStore}>
    <div className="App">
    {/* <Header />
    <Application /> */}
   <MainRouter />


    </div>
    //  </Provider>
    // </Router>
  );
}

export default App;
