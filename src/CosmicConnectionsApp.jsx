{/* Imports */}
{/* CSS styling */} import './WebAppStyling.css'
{/* Firebase */} import "./firebaseconfig";

import Header from './components/Header.jsx'
import MainPage from './pages/MainPage.jsx';
import Navigation from './components/Navigation.jsx';

{/* ° ✧ ~ ✩ Journal-shaped content holder ✩ ~ ✧ ° */}

export default function App() {
    return (
    <>
    {/* Top Header */}
    <Header/>

    {/* Element that contains all app functionalities */}
    <MainPage/>

    <Navigation/>
    </>
)}

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}
