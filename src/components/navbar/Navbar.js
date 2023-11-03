import "./navbar.css"
import Notification from "../../img/notification.svg"

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="logo"> Notif App </div>
            <div className="icons">
                <div className="icon">
                    <img src={Notification} className="iconImg" alt="" />        
                    <div className="coounter">2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;