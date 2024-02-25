import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {

  //TEMPORARY
  const posts=[
    {
      id:1,
      name:"John Doe",
      userId:1,
      profilePic:"https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc:"Software Engineer with a passion for coding and texhnology.",
      img:"https://images.pexels.com/photos/9786314/pexels-photo-9786314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id:2,
      name:"Jane Doe",
      userId:2,
      profilePic:"https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc:"Travel enthusiast exploring the world one country at a time."
    },
  ];
  return (
    <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      )
        )}
    </div>
  )
}

export default Posts