{/* Import Page components */}

{/* Main pages*/}
import MainPageLeft from '../sections/MainPageLeft.jsx'
import MainPageRight from '../sections/MainPageRight.jsx'

{/* Construction */}
import JournalCover from '../components/JournalCover.jsx'

{/* ~✩ Journal-shaped content holder ✩~ */}

function MainPage() {

  return (
    <>

    {/* Content container "Left page" */}
    <MainPageLeft/>

    {/* Content container "Right page" */}
    <MainPageRight/>

    {/* Journal */}
    <JournalCover/>

    </>
  )
}

export default MainPage

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
