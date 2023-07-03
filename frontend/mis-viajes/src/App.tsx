import Map from "./components/Maps"
import "./App.css"
import {useFetch} from './hooks/useFetch'

function App() {
  const {data, isPending, error} = useFetch("http://localhost:8800/api/checkins")

  return (
    <>
      <h1>Mis viajes</h1>
     
      {error && <div>{error}</div>}
      {isPending ? <div>Loading...</div> : data &&  <Map checkins={data} /> }
    </>
  )
}

export default App
