import {useFetch} from '../hooks/useFetch'
import Map from "../components/Maps"
import {LoginPageExample, LoginPageExampleB} from '../components/Test'

const Homepage = () => {
    const { data, isPending, error } = useFetch('http://localhost:8800/api/checkins')
    return (
        <>
          <h1>Mis viajes</h1>
         
          {error && <div>{error}</div>}
          {isPending ? <div>Loading...</div> : data &&  <Map checkins={data} /> }

          <h2 className="section-title">
            Insignias
          </h2>

          <h2 className="section-title">
            Destacados
          </h2>

          <LoginPageExampleB />

        </>
      )
}

export default Homepage