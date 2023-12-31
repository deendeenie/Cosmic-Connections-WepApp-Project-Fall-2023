{/* Import Page components */}

{/* Content pages */}
import CreateDreamPageLeft from '../sections/CreateDreamPageLeft.jsx'
import CreateUpdateRightPage from '../sections/CreateUpdateRightPage.jsx'

{/* Construction */}
import JournalCover from '../components/JournalCover.jsx'

{/* ~✩ Journal-shaped content holder ✩~ */}

export default function CreateDreamEntry() {

  return (
    <>

    {/* Content container "Left page" */}
    <CreateDreamPageLeft/>

    {/* Content container "Right page" */}
    <CreateUpdateRightPage/>

    {/* Journal */}
    <JournalCover/>

    </>
  )
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
