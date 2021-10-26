import { useQuery } from "@apollo/client";
import { QUERY } from '../../utils/query'

function App() {
  const { loading, error, data } = useQuery(QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  
  return (
    <div className="App">
      <h1>SpaceX</h1>
    </div>
  );
}

export default App;
