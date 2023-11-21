{/* Import Page components */}

{/* Content pages */}
import EntryDreamPageLeft from '../sections/EditDreamPageLeft.jsx'
import EntryDreamPageRight from '../sections/EditDreamPageRight.jsx'

{/* Construction */}
import JournalCover from '../components/JournalCover.jsx'

{/* ~✩ Journal-shaped content holder ✩~ */}

export default function ViewDreamEntry() {

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

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
