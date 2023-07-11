import { CheckinCard } from '../CheckinsList'

const LastTrips = () => {
  return (
    <section className='last-trips'>
        <div className="container">
            <h2 className="section-title">
                Últimos viajes
            </h2>
            <div className="last-trips__section">
                <CheckinCard />
                <CheckinCard />
            </div>
        </div>
    </section>
  )
}

export default LastTrips