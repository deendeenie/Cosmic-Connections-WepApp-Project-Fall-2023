{/* Import Page components */}
import ButtonPrimary from '../components/ButtonPrimary.jsx'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { uid } from 'uid';


{/* ~✩ "Left page" content container ✩~ */}

export default function CreateDream({ saveDreamEntry, newDreamEntry }) {
    const [title, setTitle] = useState("");
    const [entrytext, setEntryText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (newDreamEntry?.title) {
            setTitle(newDreamEntry.title);
            setEntryText(newDreamEntry.entrytext);
        }
    }, [newDreamEntry]);

    async function handleSubmit(event) {
        event.preventDefault();

        const newDreamEntryData = {
            title: title,
            entrytext: entrytext,
            type: "dream",
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
        <form onSubmit={handleSubmit}>
            <div className='container-entry-title'>
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

            <input
                type="text"
                value={entrytext}
                placeholder="Start writing"
                onChange={(e) => setEntryText(e.target.value)}
            />

            <p className="text-error">{errorMessage}</p>

            <ButtonPrimary label="Save" viewBox="0 0 17 15" path="M15.8823 0.882324L7.91362 11.1096M5.56989 14.1176L0.882324 8.10158"/>
        </form>
    );
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}