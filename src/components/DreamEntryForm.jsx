import '../components/CreateUpdateEntry.css'
import ButtonPrimary from "./ButtonPrimary";
import { useEffect, useState } from "react";

export default function DreamEntryForm( {dreamEntry} ) {
    // Define constants for entry data, error message and shorthand for navigation function
    const [title, setTitle] = useState("");
    const [nightstamp, setNightstamp] = useState("");
    const [entrytext, setEntryText] = useState("");
    const [entrynote, setEntryNote] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (dreamEntry?.title && dreamEntry?.nightstamp) {
            setTitle(dreamEntry.title);
            setNightstamp(dreamEntry.nightstamp);
        }}, [dreamEntry]);


    async function handleSubmit(event) {
        // Ignore all default behavior associated with this function
        event.preventDefault();

        const DreamEntryData = {
            title: title,
            entrytext: entrytext,
            nightstamp: dreamDate,
            entrynote: entrynote,
        };

        // Validate the form title
        if (dreamEntry.title && dreamEntry.nightstamp) {
            handleSubmit(DreamEntryData);
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
            placeholder={title}
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
            placeholder={nightstamp}
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
            placeholder={entrynote}
            onChange={(e) => setEntryNote(e.target.value)}
            className="entry-note-input"
        />
    </div>

    {/* Right page: Writing the entry */}
    <textarea
        type="text"
        value={entrytext}
        placeholder={entrytext}
        onChange={(e) => setEntryText(e.target.value)}
        className="entry-entry-text update-form"
    />

    {/* Button commonent used to save the entry -> Sends the input contents to the Firebase database */}
    <ButtonPrimary label="Save" type="submit" viewBox="0 0 17 15" path="M15.8823 0.882324L7.91362 11.1096M5.56989 14.1176L0.882324 8.10158"/>
    <ButtonPrimary type="delete" label="delete" viewBox="0 0 17 15" path="M15.8823 0.882324L7.91362 11.1096M5.56989 14.1176L0.882324 8.10158"/>

    {/* Error messaged displayed when the title and/or date are missing */}
    <p className="text-error">{errorMessage}</p>
    </form>
)
}