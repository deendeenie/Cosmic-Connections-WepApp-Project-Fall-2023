{/* Imports */}
{/* CSS styling */} import './WebAppStyling.css'
{/* Firebase */} import "./firebaseconfig";

import Header from './components/Header.jsx'
import MainPage from './pages/MainPage.jsx';
import CreateDreamEntry from './pages/CreateDreamEntry.jsx';
import UpdateDreamEntry from './pages/UpdateDreamEntry.jsx';
import Navigation from './components/Navigation.jsx';
import { Navigate, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

{/* ° ✧ ~ ✩ Journal-shaped content holder ✩ ~ ✧ ° */}

export default function App() {
    const directPage = (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/writedream" element={<CreateDreamEntry />} />
            <Route path="/dreamentries/:entryId" element={<UpdateDreamEntry />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );

    return (
    <>
    {/* Top Header */}
    <Header/>

    {/* Element that contains all app functionalities */}
    <main>{directPage}</main>

    <Navigation/>
    </>
)}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
