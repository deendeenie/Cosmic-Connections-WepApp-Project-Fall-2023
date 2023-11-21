import './Button.css'

function ButtonSecondary(buttonsecondary) {
  return (
    <button className="btn button-secondary" type="submit">

      {/* Icon */}
      <svg className="btn-icon" viewBox={buttonsecondary.viewBox}><path d={buttonsecondary.path} strokeLinecap="round" strokeLinejoin="round"/></svg>   

      {/* Label */}
      {buttonsecondary.label}

    </button>
  )
}

export default ButtonSecondary