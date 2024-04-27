import { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
// import PostList from "./PostList";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "20rem" }}>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger omg">
            {post.reactions}
          </span> */}
          <span
            key={post.id}
            className="position-absolute top-0 start-100 translate-middle badge
            rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin2Fill />
            {/* <span class="visually-hidden">unread messages</span>
          </span> */}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag.id} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};
export default Post;
