import { Provider } from 'react-redux'
import store from './redux/store'
// import Profile from './views/Profile';
import Post from './views/Post';
// import Address from './Address';
import AddNewAddress from './Address/AddNewAddress';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <AddNewAddress />
        {/* <Profile /> */}
        <Post />
      </div>
    </Provider>
  );
}

export default App;
