{/* Import Page components */}

{/* Content pages */}
import CreateDreamPageLeft from '../sections/CreateDreamPageLeft.jsx'
import CreateDreamPageRight from '../sections/CreateDreamPageRight.jsx'

{/* Construction */}
import JournalCover from '../components/JournalCover.jsx'

{/* ~✩ Journal-shaped content holder ✩~ */}

export default function CreateDreamEntry() {

  return (
    <>

    {/* Content container "Left page" */}
    <CreateDreamPageLeft/>

    {/* Content container "Right page" */}
    <CreateDreamPageRight/>

    {/* Journal */}
    <JournalCover/>

    </>
  )
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
