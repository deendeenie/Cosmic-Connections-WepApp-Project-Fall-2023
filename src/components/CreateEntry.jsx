{/* Import Page components */}
import ButtonPrimary from '../components/ButtonPrimary.jsx'
import { useEffect, useState } from "react";


{/* ~✩ "Left page" content container ✩~ */}

export default function CreateDream({ saveEntry, entry }) {

    const [title, setTitle] = useState("");
    const [nightstamp, setNight] = useState("");
    const [dreamentry, setDreamEntry] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (entry?.title) {
            // if entry, set the states with values from the entry object.
            // The entry object is a prop, passed from UpdatePage
            setTitle(entry.title);
        }
    }, [entry]); // useEffect is called every time entry changes.

    async function handleSubmit(event){
        event.preventDefault();

        const url = "https://webapp-project-2023-default-rtdb.firebaseio.com/journalentries.json/dream-entries.json";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost)
        });

        const formData = {
            // create a new objebt to store the value from states / input fields
            title: title,
            dreamentry: dreamentry,
        };

        const validForm = formData.title// will return false if one of the properties doesn't have a value
        if (validForm) {
            // if all fields/ properties are filled, then call saveentry
            saveEntry(formData);
        } else {
            // if not, set errorMessage state.
            setErrorMessage("You have to name your entry!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='container-entry-title'>
                <label className="entry-title">
                    Title:
                </label>
                <input
                        type="text"
                        value={title}
                        placeholder="Name your entry"
                        onChange={event => setTitle(event.target.value)}
                        className="entry-title-input"
                    />
            </div>

            <input
                    type="text"
                    value={dreamentry}
                    placeholder="Start writing"
                    onChange={event => setDreamEntry(event.target.value)}
            />

            <p className="text-error">{errorMessage}</p>

            <ButtonPrimary label="Save" viewBox="0 0 17 15" path="M15.8823 0.882324L7.91362 11.1096M5.56989 14.1176L0.882324 8.10158"/>
        </form>
    );
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}