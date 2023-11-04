import React , {useState} from "react";
import "./card.css";
import Heart from "../../img/heart.jpeg";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Info from "../../img/info.jpeg";
import HeartFilled from "../../img/heartFilled.png"

const Card = ({ post }) => {
    const [liked , setLiked] = useState(false);
    const handleNotification =()=>{
        setLiked(true);
    }

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImage} className="postImg" />
      <div className="interaction"> 
      {liked ? (
         <img src={HeartFilled} className="cardIcon" />
      ) : (
         <img src={Heart} className="cardIcon" onClick={handleNotification}/>
      )}
       
        <img src={Comment} className="cardIcon" />
        <img src={Share} className="cardIcon" />
        <img src={Info} className="cardIcon infoIcon" /> {/* Keep the class name for Info icon */}
      </div>
    </div>
  );
};

export default Card;
