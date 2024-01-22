import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/header/Header';
import HomePage from './components/pages/HomePage';
import Details from './components/cards/Details';
function App() {
  return (
    <Provider store={store}>
      <Details />
      <Header />
      <HomePage />
    </Provider>
  );
}

export default App;
