import React from "react";
import Card from "../Card/Card";
function Post({ post }) {
  return (
    <div 
      style={{
        display: "flex",
        flexWrap:'wrap',
        justifyContent:'space-between'
      }}
    >
      {post.map((element, index) => {
        return (
          <Card key={index} title={element.title} body={element.body} />
        );
      })}
    </div>
  );
}

export default Post;
