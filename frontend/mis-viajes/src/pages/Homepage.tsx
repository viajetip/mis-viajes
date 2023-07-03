import {useFetch} from '../hooks/useFetch'
import Map from "../components/Maps"

const Homepage = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/checkins')
    return (
        <>
          <h1>Mis viajes</h1>
         
          {error && <div>{error}</div>}
          {isPending ? <div>Loading...</div> : data &&  <Map checkins={data} /> }
        </>
      )
}

export default Homepage