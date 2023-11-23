{/* Import Page components */}
import { useEffect, useState } from "react";
import PageHeading from '../components/HeadingTypeOne.jsx'
import DreamEntryPreview from '../components/DreamEntryPreview.jsx'

{/* ~✩ "Left page" content container ✩~ */}

export default function MainPageLeft() {
  const [dreamentries, setDreamentries] = useState([]);

  useEffect(() => {
      async function getEntries() {
          const url = "https://webapp-project-2023-default-rtdb.firebaseio.com/dream-entries.json";
          const response = await fetch(url);
          const data = await response.json();
          const entriesList = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
          getEntries(entriesList);
      }
      getEntries();
  }, []);

  return (
    <section className="page-left">
      <PageHeading text="Your dreams" viewBox="0 0 16 15" path="M13.3823 7.49997C13.3823 3.90548 10.4417 0.978971 6.76468 0.882324C10.9433 5.11596 6.72938 12.3659 0.882324 11.1764C2.10246 12.9646 4.39049 14.1176 6.76468 14.1176C9.12769 14.1176 11.132 12.9501 12.2966 11.1764"/>
            <article>
              {dreamentries.map(dreamEntry => (
                <DreamEntryPreview dreamEntry={dreamEntry} key={dreamEntry.id} title={dreamEntry.title} />
              ))}
            </article>
    </section>
  )
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}