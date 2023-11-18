import { Component } from "react";
// Import navigation style sheet to match it
import "./components/Navigation.css"

class NotificationTrigger extends Component {
  constructor() {
    super();
    this.showNotification = this.showNotification.bind(this);
  }

// If the browser supports notifcationsn, ask for permission before sending them
  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

// Contents of notifcation
  showNotification() {
    var options = {
      body: 'Ursa misses you!',
      icon: 'https://file.garden/ZTVwzjUz82Z8YzG4/Misc%20uses/ursa_notification.png',
      dir: 'ltr',
    };

    notification = new Notification('Time to journal!', options);
  }

// Button to trigger the notification
  render() {
    return (
        <div onClick={this.showNotification} className="nav-label">
          <svg className="nav-icon" viewBox="0 0 14 15"><path d="M3.11689 10.2249H0.78125V0.882324H13.238V2.43942M3.11689 12.1713V14.1176L7.00962 10.2249H13.238V5.5536"  strokeLinecap="round" strokeLinejoin="round"/></svg>
          Trigger a notification
        </div>
    );
  }
}

export default NotificationTrigger;