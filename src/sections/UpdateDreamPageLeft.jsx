{/* Import Page components */}
import UpdateDream from '../components/DreamUpdateEntry.jsx';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

{/* ~✩ "Left page" content container ✩~ */}

export default function updateDreamPageLeft() {
        const navigate = useNavigate();
    
        async function updateEntry() {
    
            const url = `${import.meta.env.VITE_FIREBASE_DB_URL}/dream-entries.json`;
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(dreamEntry)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("New entry has been added to the journal: ");
                navigate("/");
            } else {
                console.log("Sorry, something went wrong");
            }
        }
    
        return (
            <section className="page-left">
                <UpdateDream saveEntry={updateEntry} />
            </section>
        );
    }
    

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}