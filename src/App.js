import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './redux-state/redux-store';


function App() {
  return (
    <Router>
     <Provider store={reduxStore}>
    <div className="App">
    <HeadBar />


    <HomePage/>
    </div>
     </Provider>
    </Router>
  );
}

export default App;
