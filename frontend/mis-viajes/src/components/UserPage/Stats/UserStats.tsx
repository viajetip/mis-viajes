import StatsBlock from "./StatsBlock";

const UserStats = () => {
  return (
    <section className="uset-stats">
      <div className="container">
        <div className="uset-stats__grid">
          <StatsBlock title="Top de países" />
          <StatsBlock title="Top de ciudades" />
        </div>
      </div>
    </section>
  );
};

export default UserStats;
