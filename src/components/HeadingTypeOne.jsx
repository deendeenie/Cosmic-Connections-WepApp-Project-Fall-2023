{/* Import CSS file */}
import './HeadingTypeOne.css'

{/* ° ✧ ~ ✩ ° ✦Heading Type 1 ✦ ° ✩ ~ ✧ ° */}

function PageHeading(heading) {
  return (

    <div className="heading-one-container">

      <h1 className="heading-one">
        {/* Icon */}
        <svg className="heading-one-icon" viewBox={heading.viewBox}><path d={heading.path} strokeLinecap="round" strokeLinejoin="round"/></svg>
        
        {/* Heading text */}
        {heading.text}
      </h1>

      {/* Divider */}
      <svg className="divider" height="6" viewBox="0 0 672 6"><path d="M1 2.62818C114.588 8.33387 647.897 -5.34985 671 5" strokeWidth="0.5"/></svg>
    
    </div>
  )
}

export default PageHeading

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}