import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //temporary
  const comments = [
    {
      id: 1,
      desc: "The post is too good..! This post is really great! I enjoyed reading it. ",
      name: "Sam",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/1436986/pexels-photo-1436986.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      desc: "I love this so much",
      name: "Riza",
      userId: 2,
      profilePicture: "https://images.pexels.com/photos/1436986/pexels-photo-1436986.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment.."/>
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
