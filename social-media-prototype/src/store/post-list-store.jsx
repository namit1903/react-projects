 import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addInitialPosts: () => {},
  addPosts: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
// provider functions starts
const PostListProvider = ({ children }) => {
const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { 
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "39",
    title: "Namit",
    body: "hi i'm going to mumbai so Enjoy and any from me.ENJOY!!!!",
    reactions: 2300,
    userId: "user-7",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "44",
    title: "Prashant",
    body: "hi i'm was to mumbai so Enjoy and any from me.ENJOY!!!!",
    reactions: 30,
    userId: "user-7",
    tags: ["graduating", "unbelievable"],
  },
  {
    id: "46",
    title: "Puneet",
    body: "hi i'm was to mumbai so Enjoy and any from me.ENJOY!!!!",
    reactions: 33,
    userId: "user-7",
    tags: ["graduating", "unbelievable"],
  },
];
export default PostListProvider;
