import './App.css';
import store from './redux/store/ConfigureStore';
import FlatBookingRouter from './router/flatBooking/FlatBookingRouter';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <Provider store={store()}>
        <FlatBookingRouter />
      </Provider>
    </div>
  );
}

export default App;
