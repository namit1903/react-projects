import Post from "./Post";
import { useState, useContext, useEffect } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMsg";
import Loading from "./Loading";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setFetching(true);
    console.log("fetch Started");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
        console.log("fetch returned");
      });

    console.log("Fetch ended");
    return () => {
      console.log("cleanig useeffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
