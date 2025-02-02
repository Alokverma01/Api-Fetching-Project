import React from 'react';
const PostCards = (props) => {
    return (
        <div className="postcards">
           <div className="postcards__container">
           <h2>{props.id}</h2>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
           </div>
            
        </div>
    )
}
export default PostCards;