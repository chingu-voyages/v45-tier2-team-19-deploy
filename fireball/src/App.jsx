
import "./App.css";
import Body from './layout/Body'

import { useDataContext } from "./hooks/useDataContext";

function App() {
  const { data, loading } = useDataContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div>
      <Body />
    </div>
  );

}

export default App;
