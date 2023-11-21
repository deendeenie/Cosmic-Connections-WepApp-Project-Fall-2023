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

    function handleSubmit(event) {
        event.preventDefault();
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
            setErrorMessage("You have to name your entry");
        }
    }

    return (
      <section className="page-left">
        <form onSubmit={handleSubmit}>
            <label>
                Title
                <input
                    type="text"
                    value={title}
                    placeholder="Name your entry"
                    onChange={event => setTitle(event.target.value)}
                />
            </label>
            <label>
                Entry
                <input
                    type="text"
                    value={dreamentry}
                    placeholder="Name your entry"
                    onChange={event => setDreamEntry(event.target.value)}
                />
            </label>
            <p className="text-error">{errorMessage}</p>

            <ButtonPrimary label="Save"/>
        </form>
        </section>
    );
}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}