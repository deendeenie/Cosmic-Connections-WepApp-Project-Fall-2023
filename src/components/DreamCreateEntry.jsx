{/* Import Page components */}
import ButtonPrimary from './ButtonPrimary.jsx'
import '../components/CreateUpdateEntry.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

{/* ~✩ "Left page" content container ✩~ */}

export default function CreateDream({ newDreamEntry }) {
    // Define constants for entry data, error message and shorthand for navigation function
    const [title, setTitle] = useState("");
    const [nightstamp, setNightstamp] = useState("");
    const [entrytext, setEntryText] = useState("");
    const [entrynote, setEntryNote] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (newDreamEntry?.title && newDreamEntry?.nightstamp) {
            setTitle(newDreamEntry.title);
            setNightstamp(newDreamEntry.nightstamp);
        }
    }, [newDreamEntry]);

    async function handleSubmit(event) {
        // Ignore all default behavior associated with this function
        event.preventDefault();

        // Deconstruction of the selected date of the entry: from yyyy-mm-dd tt:tt -> dd/mm/yyyy
        const nightDate = new Date(nightstamp); // Get the original date format
        const day = ('0' + nightDate.getDate()).slice(-2); // Get the day selected, made of 2 digits
        const month = ('0' + (nightDate.getMonth() + 1)).slice(-2); // Get the month selected, skip the day and grab the month made of 2 digits
        const year = nightDate.getFullYear(); // Get the year selected
        const dateString = `${day}/${month}/${year}`; // Rebuilding the date in the desired format
        const dreamDate = dateString.split('T')[0]; // Removing the "time" value from the date

        // The data fields that will be saved to Firebase
        const newDreamEntryData = {
            title: title,
            entrytext: entrytext,
            type: "dream",
            nightstamp: dreamDate,
            entrynote: entrynote,
        };

        // Save entry
        const url = "https://webapp-project-2023-default-rtdb.firebaseio.com/dream-entries.json";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newDreamEntryData)
        });

        // Validate the form title
        if (newDreamEntryData.title && newDreamEntryData.nightstamp) {
            handleSubmit(newDreamEntryData);
        } else {
            setErrorMessage("Your entry needs a title and date!");
        }

        if (response.ok) {
            const data = await response.json();
            console.log("New entry created: ", data);
            navigate("/");
        } else {
            console.log("Sorry, something went wrong");
        }
    }

// Run the inputs to be saved on Firebase
    return (
        <form onSubmit={handleSubmit} className="submit-entry-container">

            {/* Input: Entry title*/}
            <div className="container-entry-info">
                <label className="entry-input-label">
                    Title:
                </label>
                <input
                    type="text"
                    value={title}
                    placeholder="Name your entry"
                    onChange={(e) => setTitle(e.target.value)}
                    className="entry-info-input"
                />
            </div>

            {/* Input date: Input the night the dream happened */}
            <div className="container-entry-info">
                <label className="entry-input-label">
                    Night of the dream:
                </label>
                <input
                    type="date"
                    value={nightstamp}
                    onChange={(e) => setNightstamp(e.target.value)}
                    className="entry-date entry-info-input"
                />
            </div>

            {/* Input: Add a note to the entry */}
            <div className="container-entry-info">
                <label className="entry-input-label">
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

            {/* Right page: Writing the entry */}
            <textarea
                type="text"
                value={entrytext}
                placeholder="Start writing..."
                onChange={(e) => setEntryText(e.target.value)}
                className="entry-entry-text"
            />

            {/* Button commonent used to save the entry -> Sends the input contents to the Firebase database */}
            <ButtonPrimary label="Save" viewBox="0 0 17 15" path="M15.8823 0.882324L7.91362 11.1096M5.56989 14.1176L0.882324 8.10158"/>

            {/* Error messaged displayed when the title and/or date are missing */}
            <p className="text-error">{errorMessage}</p>
        </form>
    );
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}