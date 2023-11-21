{/* Import Page components */}
import ButtonPrimary from '../components/ButtonPrimary.jsx'
import CreateDream from '../components/CreateEntry.jsx';
import { useNavigate, useParams } from "react-router-dom";

{/* ~✩ "Left page" content container ✩~ */}

export default function CreateDreamPageLeft() {
        const navigate = useNavigate();
    
        async function createPost(newPost) {
    
            const url = `${import.meta.env.VITE_FIREBASE_DB_URL}/journalentries.json`;
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(newPost)
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
            <section className="page-left">
                <CreateDream savePost={createPost} />
            </section>
        );
    }
    

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}