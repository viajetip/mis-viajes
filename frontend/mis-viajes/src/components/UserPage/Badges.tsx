import First from '../../assets/img/bagdes/first-badge.png'
import Mexico from '../../assets/img/bagdes/mexico-badge.png'
import MexicoCity from '../../assets/img/bagdes/mexico-city-badge.png'
import France from '../../assets/img/bagdes/france-badge.png'


const Badges = () => {
  return (
    <section className="badges">
        <div className="container-medium">
            <h2 className="section-title">
                Insignias <span className="badges__badge-count stats-item__count">3</span>
            </h2>
            <div className="badges__section">
                <div className="badges__badge">
                    <img src={France} alt="badge" />
                </div>
                <div className="badges__badge">
                    <img src={MexicoCity} alt="badge" />
                </div>
                <div className="badges__badge">
                    <img src={Mexico} alt="badge" />
                </div>
                <div className="badges__badge">
                    <img src={First} alt="badge" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Badges