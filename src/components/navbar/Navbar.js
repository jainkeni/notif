import "./navbar.css"
import Notification from "../../img/Notification.jpeg"
import Message from "../../img/message.png"
import Settings from "../../img/settings.png"

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo"> Notif App </div>
            <div className="icons">
                <div className="icon">
                    <img src={Notification} className="iconImg" alt="" />        
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Message} className="iconImg" alt="" />        
                    <div className="counter">2</div>
                </div>
                <div className="icon">
                    <img src={Settings} className="iconImg" alt="" />        
                    <div className="counter">2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;