import { StatsItems } from "./StatsItems"

const StatsBlock = ({title}) => {
  return (
    <div className="stats-block">
        <div className="section-title">
            {title}
        </div>
        <div className="stats-block__section">
            <StatsItems />
            <StatsItems />
            <StatsItems />
        </div>
    </div>
  )
}

export default StatsBlock