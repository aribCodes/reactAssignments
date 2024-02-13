import React from "react";
import DisplayWholeCard from '../DisplayWholeCard.jsx'
import { useNavigate, useSearchParams } from "react-router-dom";

function PostCard({ post }) {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  function handlePostInfo() {
    navigate("/post");

    params.set("id",post.id);
    params.set("userId",post.id);
    params.set("title",post.title);
    params.set("body",post.body);
    setParams(params);
    console.log("post", post);
  }
  return (
    <>
      <div id="post" onClick={handlePostInfo}>
        <h2>
          <b>Id:</b> {JSON.stringify(post.id)}
        </h2>
        <h4>
          <b>UserId:</b> {JSON.stringify(post.userId)}
        </h4>
        <p>
          <b>Title:</b> {JSON.stringify(post.title)}
        </p>
        <p id="bodyPara">
          <b>Body:</b> {JSON.stringify(post.body)}
        </p>
      </div>
    </>
  );
}

export default PostCard;
