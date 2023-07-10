import CheckinBtn from './CheckinBtn'
import CheckinCard from './CheckinCard'
import DateTag from './DateTag'

const CheckinsList = () => {
  return (
    <section className='checkin-list'>
        <CheckinBtn />
        <DateTag />
        <CheckinCard />
        <CheckinCard />

    </section>
  )
}

export default CheckinsList