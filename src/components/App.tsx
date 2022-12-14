import { Provider } from 'react-redux';
import RepositoriesList from './RepositoriesList';
import { store } from '../state';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
