{/* Import Page components */}
import ButtonPrimary from '../components/ButtonPrimary.jsx'
import TextEditor from './TextEditor.jsx';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

{/* ~✩ "Left page" content container ✩~ */}

export default function CreateDream({ saveDreamEntry, newDreamEntry }) {
    const [title, setTitle] = useState("");
    const [nightstamp, setNightstamp] = useState("");
    const [entrytext, setEntryText] = useState("");
    const [entrynote, setEntryNote] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (newDreamEntry?.title) {
            setTitle(newDreamEntry.title);
            setEntryText(newDreamEntry.entrytext);
            setNightstamp(newDreamEntry.nightstamp);
        }
    }, [newDreamEntry]);

    async function handleSubmit(event) {
        event.preventDefault();

        // Deconstruction of the selected date of the entry: from yyyy-mm-dd tt:tt -> dd/mm/yyyy
        const nightDate = new Date(nightstamp);
        const day = ('0' + nightDate.getDate()).slice(-2); // Get the day selected, made of 2 digits
        const month = ('0' + (nightDate.getMonth() + 1)).slice(-2); // Get the month selected, skip the day and grab the month made of 2 digits
        const year = nightDate.getFullYear(); // Get the year selected
        const dateString = `${day}/${month}/${year}`; // Rebuilding the date in the desired format
        const dreamDate = dateString.split('T')[0]; // Removing the "time" value from the date

        const newDreamEntryData = {
            title: title,
            entrytext: entrytext,
            type: "dream",
            nightstamp: dreamDate,
            entrynote: entrynote,
        };

        // Validate the form title
        const validForm = newDreamEntryData.title;

        if (validForm) {
            handleSubmit(newDreamEntryData);
        } else {
            setErrorMessage("You have to name your entry!");
        }

        // Save entry
        const url = "https://webapp-project-2023-default-rtdb.firebaseio.com/dream-entries.json";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newDreamEntryData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("New post created: ", data);
            navigate("/");
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="submit-entry-container">
            <div className="container-entry-title">
                <label className="entry-title">
                    Title:
                </label>
                <input
                    type="text"
                    value={title}
                    placeholder="Name your entry"
                    onChange={(e) => setTitle(e.target.value)}
                    className="entry-title-input"
                />
            </div>

            <div className="container-entry-title">
                <label className="entry-title">
                    Night of the dream:
                </label>
                <input
                    type="date"
                    value={nightstamp}
                    onChange={(e) => setNightstamp(e.target.value)}
                    className="entry-date entry-title-input"
                />
            </div>

            <div className="container-entry-title">
                <label className="entry-title">
                    Note:
                </label>
                <textarea
                    type="text"
                    value={entrynote}
                    placeholder="..."
                    onChange={(e) => setEntryNote(e.target.value)}
                    className="entry-note-input"
                />
            </div>

            <TextEditor
                type="text"
                value={entrytext}
                placeholder="Start writing"
                onChange={(e) => setEntryText(e.target.value)}
                className="entry-entrytext"
            />

            <p className="text-error">{errorMessage}</p>

            <ButtonPrimary label="Save" viewBox="0 0 17 15" path="M15.8823 0.882324L7.91362 11.1096M5.56989 14.1176L0.882324 8.10158"/>
        </form>
    );
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}