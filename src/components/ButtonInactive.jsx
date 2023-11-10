import './Button.css'

function ButtonInactive(buttoninactive) {
  return (
    <button className="btn button-inactive">

      {/* Icon */}
      <svg className="btn-icon" viewBox={buttoninactive.viewBox}><path d={buttoninactive.path} strokeLinecap="round" strokeLinejoin="round"/></svg>
      
      {/* Label */}
      {buttoninactive.label}

    </button>
  )
}

export default ButtonInactive