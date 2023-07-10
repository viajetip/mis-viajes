import React from 'react'
import { Navbar } from '../components/Navbar'
import { CheckinsList } from '../components/CheckinsList'
import Map from '../components/Maps'

const UserHomepage = () => {
  return (
    <>
        <Navbar />
        <section className="page-section checkins-section">
            <Map />
            <div className="container-narrow">
                <CheckinsList />
            </div>
        </section>
    </>
  )
}

export default UserHomepage