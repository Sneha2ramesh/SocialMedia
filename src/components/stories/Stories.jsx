import { useContext } from "react"
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () => {

    const {currentUser}=useContext(AuthContext
        )

    //Temporary
    const stories=[
        {
            id:1,
            name:"Riya",
            img:"https://images.pexels.com/photos/5361244/pexels-photo-5361244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:2,
            name:"Riya",
            img:"https://images.pexels.com/photos/1152885/pexels-photo-1152885.jpeg"
        },
        {
            id:3,
            name:"Riya",
            img:"https://images.pexels.com/photos/6177643/pexels-photo-6177643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:4,
            name:"Riya",
            img:"https://images.pexels.com/photos/7128963/pexels-photo-7128963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ]
  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>
            <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
        ))
        }
    </div>
  )
}

export default Stories