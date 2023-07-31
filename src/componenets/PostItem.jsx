import React from 'react';

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const PostItem = (props) => {
    return (
        <div className="post" style={{MarginTop: '10px'}}>
            <div><button id={props.buttonId}>{props.name}</button></div>
            <div><button onClick={()=>props.removePost(props.buttonId)}>delete post</button></div>
        </div>

    );
};

export default PostItem;