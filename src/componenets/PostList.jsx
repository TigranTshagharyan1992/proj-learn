import React from 'react';
import PostItem from "./PostItem";

const  PostList = ({posts, value, removePost}) => {

    if(!posts.length){
        return (
            <h1 style={{textAlign:'center'}}>
                Dont have data to show
            </h1>
        )
    }

    return (
        <div id={value}>
            {posts.map( (post,index) =>{
                return <PostItem name={post.name} buttonId ={post.buttonId} key={index+1} removePost={removePost}/>;
            })}
        </div>
    );
};

export default PostList;