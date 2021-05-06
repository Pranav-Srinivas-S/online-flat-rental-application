import './App.css';
import store from './redux/store/ConfigureStore';
import { Provider } from 'react-redux';
import HomeRouter from './router/HomeRouter';

/************************************************************************************
   * Function: App
   * Description: It renders HomeRouter
   * Created Date:  29-04-2021 
 ************************************************************************************/

function App() {
  return (
    <div>
      <Provider store={store()}>
        <HomeRouter />
      </Provider>
    </div>
  );
}

export default App;