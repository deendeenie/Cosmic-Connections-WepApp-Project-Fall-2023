{/* Import Page components */}

{/* Content pages */}
import UpdateDreamPageLeft from '../sections/UpdateDreamPageLeft.jsx'
import CreateUpdateRightPage from '../sections/CreateUpdateRightPage.jsx'

{/* Construction */}
import JournalCover from '../components/JournalCover.jsx'

{/* ~✩ Journal-shaped content holder ✩~ */}

export default function UpdateDreamEntry() {

  return (
    <>

    {/* Content container "Left page" */}
    <UpdateDreamPageLeft/>

    {/* Content container "Right page" */}
    <CreateUpdateRightPage/>

    {/* Journal */}
    <JournalCover/>

    </>
  )
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
