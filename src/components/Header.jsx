{/* Import Header sides components */}
import HeaderLeftSide from './HeaderLeftSide'
import HeaderRightSide from './HeaderRightSide'

{/* ° ✧ ~ ✩ ° ✦ Top header ✦ ° ✩ ~ ✧ ° */}

function Header() {
    return (
      <header className='top-header'>

        {/* Header side with the logo */}
        <HeaderLeftSide/>

        {/* Header side with the lof-out */}
        <HeaderRightSide/>

      </header>
    )
  }
  
  export default Header

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}