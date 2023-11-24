{/* Import Page components */}
import '../components/CreateUpdateEntry.css'

import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";

import ButtonPrimary from './ButtonPrimary.jsx'
import DreamEntryForm from './DreamEntryForm.jsx';

{/* ~✩ "Left page" content container ✩~ */}

export default function UpdateDream() {
    // Define constants for entry data, error message and shorthand for navigation function
    const [dreamEntry, setDreamEntry] = useState();
    const params = useParams();
    const navigate = useNavigate();
    const url = `${import.meta.env.VITE_FIREBASE_DB_URL}/dream-entries/${params.entryId}.json`

    useEffect(() => {
        async function getDreamEntry() {
            const response = await fetch(url);
            const data = await response.json();
            setDreamEntry(data);
        }

        getDreamEntry();
    }, [url]);

    async function saveDreamEntry(dreamEntryToUpdate) {
        dreamEntryToUpdate.uid = dreamEntry.uid;
        const response = await fetch(url, {
            method: "GET",
            body: JSON.stringify(dreamEntryToUpdate)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Dream entry updated: ", data);
            navigate("/");
        } else {
            console.log("Sorry, something went wrong");
        }
    }

    async function deleteEntry() {
        const confirmDelete = window.confirm(`Do you want to delete post, ${entry.title}?`);
        if (confirmDelete) {
            const response = await fetch(url, {
                method: "DELETE"
            });
            if (response.ok) {
                console.log("Entry deleted");
                navigate("/");
            } else {
                console.log("Sorry, something went wrong");
            }
        }
    }

return (
    <DreamEntryForm dreamEntry={dreamEntry} saveDreamEntry={saveDreamEntry}/>
);
}

{/*° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ °*/}