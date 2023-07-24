import CheckinBtn from "./CheckinBtn";
import CheckinCard from "./CheckinCard";
import DateTag from "./DateTag";

const CheckinsList = ({ checkins }) => {
  return (
    <section className="checkin-list">
      <CheckinBtn />
      <DateTag />
      {checkins.map((checkin, index) => {
        return <CheckinCard key={`${index}-itemcard`} checkin={checkin} />;
      })}
    </section>
  );
};

export default CheckinsList;
