const GeneralStats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          <div className="stats__grid-item">
            <div className="stats__grid-item-subtitle section-title">Checkins</div>
            <div className="stats__grid-item-title">1000</div>
          </div>
          <div className="stats__grid-item">
            <div className="stats__grid-item-subtitle section-title">Países</div>
            <div className="stats__grid-item-title">20</div>
          </div>
          <div className="stats__grid-item">
            <div className="stats__grid-item-subtitle section-title">Ciudades</div>
            <div className="stats__grid-item-title">30</div>
          </div>
          <div className="stats__grid-item">
            <div className="stats__grid-item-subtitle section-title">Puntos</div>
            <div className="stats__grid-item-title">2200</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralStats;
