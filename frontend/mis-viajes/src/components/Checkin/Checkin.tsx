const Checkin = () => {
  return (
    <section className="checkin-container">
      <h1>Buscar lugar</h1>
      <p className="checkin-container__subtitle">
        Busca el lugar donde te encuentras
      </p>
      <div className="checkin-container__input-container">
        <input type="text" placeholder="Buscar lugar" />
      </div>
      <div className="checkin-container__list">
        <div className="checkin-container__list-item">
          <div className="checkin-container__list-item__icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
            <div className="checkin-container__list-item__info">
                <h3>Tour Eiffel</h3>
                <p>París, Francia</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Checkin;
