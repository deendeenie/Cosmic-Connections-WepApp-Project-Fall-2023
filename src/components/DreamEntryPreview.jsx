import { useNavigate } from "react-router-dom";

export default function DreamEntryPreview({ dreamentry }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/posts/${dreamentry.id}`);
    }

    return (
        <article onClick={handleClick}>
            <h2>{dreamentry.title}</h2>
        </article>
    );
}