import './style.css'
import Ship from './Ship'

export default function ShipList({ ships }) {
  return (
    <div className="ship-list">
      <span className="feature-name">RESCUE SHIPS</span>
      {ships.map(ship =>
        <Ship {...ship} key={ship.name}/>
      )}  
    </div>
  )
}