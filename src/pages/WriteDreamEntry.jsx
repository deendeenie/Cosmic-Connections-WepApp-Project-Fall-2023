{/* Import Page components */}

{/* Entry pages */}
import EntryDreamPageLeft from '../sections/EntryDreamPageLeft.jsx'
import EntryDreamPageRight from '../sections/EntryDreamPageRight.jsx'

{/* Construction */}
import JournalCover from '../components/JournalCover'

{/* ~✩ Journal-shaped content holder ✩~ */}

function WriteDreamEntry() {

  return (
    <>

    {/* Content container "Left page" */}
    <EntryDreamPageLeft/>

    {/* Content container "Right page" */}
    <EntryDreamPageRight/>

    {/* Journal */}
    <JournalCover/>

    </>
  )
}

export default WriteDreamEntry

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
