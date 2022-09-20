import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypesSelector';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
// import { searchRepositories } from '../state/action-creators';

const RepositoriesList = () => {
  const [term, setTerm] = useState(''); // custom hook
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  // console.log(data, error, loading);

  const formSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    searchRepositories(term);
    // dispatch(actionCreators.searchRepositories(term) as any);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          placeholder='search'
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {data.length === 0 && !loading && <h3>No result found</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
