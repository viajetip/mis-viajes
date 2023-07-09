import React from 'react'
import { Navbar } from '../components/Navbar'
import { CheckinsList } from '../components/CheckinsList'

const UserHomepage = () => {
  return (
    <>
        <Navbar />
        <section className="checkins-section">
            <CheckinsList />
        </section>
    </>
  )
}

export default UserHomepage