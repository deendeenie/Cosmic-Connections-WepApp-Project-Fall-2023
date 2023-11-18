// Import CSS file and Navigation linking
import "./Navigation.css"
import { NavLink } from "react-router-dom";
import NotificationTrigger from "../NotificationTrigger";

{/*° ✧ ~ ✩ Navigation component ✩ ~ ✧ °*/}

function Navigation() {
    return (
      <nav className="navigation">

        {/* Navigate to main page, "Your journal" */}
        <NavLink to="/" className="nav-label">
          <svg className="nav-icon" viewBox=""><path d="M10.3245 7.22837V14.2353L5.65321 9.56401L0.981934 14.2353V11.1211M10.3245 4.11419V2.55709C10.3245 1.69713 9.62738 1 8.7674 1H2.53903C1.67907 1 0.981934 1.69713 0.981934 2.55709V8.00692" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Your journal
        </NavLink>

        {/* Create a new entry about a dream, "New dream entry" */}        
        <NavLink to="/writedream" className="nav-label">
          <svg className="nav-icon" viewbox="0 0 16 15"><path d="M13.3823 7.49997C13.3823 3.90548 10.4417 0.978971 6.76468 0.882324C10.9433 5.11596 6.72938 12.3659 0.882324 11.1764C2.10246 12.9646 4.39049 14.1176 6.76468 14.1176C9.12769 14.1176 11.132 12.9501 12.2966 11.1764" strokeLinecap="round" strokeLinejoin="round"/></svg>
          New dream entry
        </NavLink>

        {/* Create a new life journal entry, "New life entry" */}
        <NavLink to="/writelife" className="nav-label">
          <svg className="nav-icon" viewbox="0 0 16 15"><path d="M1.0293 7.49997H2.49989M12.794 7.49997H14.2646M7.64694 0.882324V2.35291M7.64694 12.647V14.1176M2.4999 2.35293L3.97049 3.82352M11.3234 11.1764L12.794 12.647M2.49993 12.647L3.97052 11.1764M11.3233 3.82349L12.7939 2.3529M9.85283 7.49997C9.85283 8.71828 8.86525 9.70585 7.64694 9.70585C6.42863 9.70585 5.44106 8.71828 5.44106 7.49997C5.44106 6.28166 6.42863 5.29409 7.64694 5.29409C8.86525 5.29409 9.85283 6.28166 9.85283 7.49997Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          New life entry
        </NavLink>

        {/* Test button to show off notification functionality */}
        <NotificationTrigger/>

      </nav>
    );
  }

export default Navigation

{/* ° ✧ ~ ✩ ° ✦ ~° ✷ °~ ✦ ° ✩ ~ ✧ ° */}