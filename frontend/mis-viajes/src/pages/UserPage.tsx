import { Stats, LastTrips, Badges, ProfileHeader, Featured } from "../components/UserPage"
import { Navbar } from "../components/Navbar"
import UserStats from "../components/UserPage/Stats/UserStats"

const UserPage = () => {
  return (
    <>
        <Navbar />
        <section className="page-section">
            <ProfileHeader />
            <Stats />
            <Badges />
            <LastTrips />
            <UserStats />
            <Featured />
            <div className="container">
            {
        
                /* Stats */
                /* Badges */
                /* Features */
                /* Last Trips */
            }
        </div>
        </section>

    </>
  )
}

export default UserPage