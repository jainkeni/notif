import React , {useState} from "react";
import "./card.css";
import Heart from "../../img/heart.jpeg";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Info from "../../img/info.jpeg";
import HeartFilled from "../../img/heartFilled.png"

const Card = ({ post , socket , user}) => {
    const [liked , setLiked] = useState(false);
    const handleNotification =(type)=>{
        setLiked(true);
        socket.emit("sendNotification" , {
          senderName : user,
          receiverName : post.username ,
          type,
        })
    }

  return (
    <div className="card">
      <div className="info">
      <img src={post.userImg} alt="UserImg Icon" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="PostImage icon" className="postImg" />
      <div className="interaction"> 
      {liked ? (
         <img src={HeartFilled} alt="HeartFilled icon" className="cardIcon" />
      ) : (
         <img src={Heart} alt="Heart icon" className="cardIcon" onClick={()=>handleNotification(1)}/>
      )}
       
        <img src={Comment} alt="Comment icon"className="cardIcon" onClick={()=>handleNotification(2)}/>
        <img src={Share} alt="Share icon" className="cardIcon" onClick={()=>handleNotification(3)}/>
        <img src={Info} alt="Info icon" className="cardIcon infoIcon" /> 
      </div>
    </div>
  );
};

export default Card;
