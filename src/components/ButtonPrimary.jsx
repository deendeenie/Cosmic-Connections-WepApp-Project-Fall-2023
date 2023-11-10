import './Button.css'

function ButtonPrimary(buttonprimary) {
  return (
    <button className="btn button-primary">
      
      {/* Icon */}
      <svg className="btn-icon" viewBox={buttonprimary.viewBox}><path d={buttonprimary.path} strokeLinecap="round" strokeLinejoin="round"/></svg>
      
      {/* Label */}
      {buttonprimary.label}

    </button>
  )
}

export default ButtonPrimary