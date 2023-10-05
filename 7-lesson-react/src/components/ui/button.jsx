export default function Button({type,onClick,text}) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>{text || 'Click me'}</button>
  )
}
