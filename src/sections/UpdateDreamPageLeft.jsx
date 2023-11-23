{/* Import Page components */}
import CreateDream from '../components/CreateEntry.jsx';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

{/* ~✩ "Left page" content container ✩~ */}

export default function CreateDreamPageLeft() {
        const navigate = useNavigate();
    
        async function createEntry() {
    
            const url = `${import.meta.env.VITE_FIREBASE_DB_URL}/dream-entries.json`;
            const response = await fetch(url, {
                method: "POST",
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
                <CreateDream saveEntry={createEntry} />
            </section>
        );
    }
    

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}