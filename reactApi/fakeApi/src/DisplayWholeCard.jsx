import React from "react";
import { useSearchParams } from "react-router-dom";

function DisplayWholeCard() {
  const [params, setParams] = useSearchParams();

  let id = params.get("id");
  let userId = params.get("userId");
  let postTitle = params.get("title");
  let postBody = params.get("body");

  if (id != null) {
    return (
      <div>
        <h2>
          <b>Id:</b> {id}
        </h2>
        <h4>
          <b>UserId:</b> {userId}
        </h4>
        <p>
          <b>Title:</b> {postTitle}
        </p>
        <p id="bodyPara">
          <b>Body:</b> {postBody}
        </p>
      </div>
    )
  }
  
}

export default DisplayWholeCard;
