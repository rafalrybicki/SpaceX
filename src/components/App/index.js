import './style.css'
import { useQuery } from "@apollo/client";
import { QUERY } from '../../utils/query'
import Mission from "../Mission";

function App() {
  const { loading, error, data } = useQuery(QUERY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  
  return (
    <div className="app">
      <h1>SpaceX</h1>
      <Mission {...data.launchesPast[0]}/>
    </div>
  );
}

export default App;
