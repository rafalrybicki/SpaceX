import './style.css'
import { getFormatDate } from '../../utils/getFormtDate'
import ShipList from '../ShipList'

export default function Mission({ mission_name, rocket, links, launch_date_local, launch_site, ships }) {
  const recovered = rocket.fairings.recovered

  return (
    <div className="mission">
      <span className="feature-name">MISSION</span>
      <span className="mission-name">{mission_name}</span>

      <span className="feature-name">ROCKET</span>
      <span className="rocket-val">{rocket.rocket_name} </span> 
      <span className={`rocket-status ${recovered ? 'recovered' : ''}`}>
        {recovered ? 'RECOVERED' : 'UNDERCOVERED'}
      </span>

      <a 
        target="_blank"
        rel="noopener noreferrer"
        href={links.wikipedia}
        className="link"
      >LEARN MORE</a>

      <span className="feature-name">LAUNCH DATE</span>
      <span className="feature-val">{getFormatDate(launch_date_local)}</span>

      <span className="feature-name">LAUNCH SITE</span>
      <span className="feature-val">
        {launch_site.site_name}
        <span className="tooltip"> {launch_site.site_name_long}</span>
      </span>

      {ships && <ShipList ships={ships} />}
    </div>
  )
}

