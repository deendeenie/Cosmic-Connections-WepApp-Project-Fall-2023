import { useNavigate } from "react-router-dom";

export default function DreamEntryPreview( {dreamEntry} ) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/dreamentries/${dreamEntry.id}`);
    }

    return (
        <article className="entry-preview" onClick={handleClick}>
            <div className="entry-preview-info">
                <h4>{dreamEntry.title}</h4>
                <p>
                    <svg className="entry-preview-icon" viewBox="0 0 13 15">
                        <path d="M2.18274 2.70422C1.4133 2.70422 0.789551 3.32798 0.789551 4.09741V9.67017V12.4565C0.789551 13.226 1.4133 13.8497 2.18274 13.8497H10.5419C11.3113 13.8497 11.9351 13.226 11.9351 12.4565V6.88379V4.09741C11.9351 3.32798 11.3113 2.70422 10.5419 2.70422H8.45209M8.45209 1.31104V4.09741M4.27252 1.31104V4.09741M0.789551 6.88379H9.14868M4.27252 2.70422H6.36231" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {dreamEntry.nightstamp}
                </p>
            </div>
            <hr/>
        </article>
    );
}