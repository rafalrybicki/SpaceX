import './style.css'

export default function Navigation({ index, setIndex }) {
  const decrement = () => {
    setIndex(index - 1)
  }

  const increment = () => {
    setIndex(index + 1)
  }

  return (
    <div className="navigation">
      <button
        onClick={decrement}
        disabled={index === 0}
      >
        {'<'}
      </button>
      <button
        onClick={increment}
        disabled={index === 9}
      >
        {'>'}
      </button>
    </div>
  )
}