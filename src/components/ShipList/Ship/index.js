import './style.css'

export default function Ship({ image, name, home_port, weight_kg }) {
  return (
    <div className="ship">
      <img src={image} alt={name} />
      <span className="ship-name">{name}</span>
      <span className="feature-name">HOME PORT</span>
      <span className="feature-value">{home_port}</span>
      <br />
      <span className="feature-name">WEIGHT [KG]</span>
      <span className="feature-value">{weight_kg || 'no data'}</span>
    </div>
  )
}