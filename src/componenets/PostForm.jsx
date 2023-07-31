import React, {useState, useRef} from 'react';
import MyInput from "./inputs/MyInput";
import MyButton from "./buttons/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({name:'',buttonId:''});
    const postRef = useRef();


    const  addNewPost = (e) => {
        e.preventDefault();
        setPost({name:'',buttonId:''});
        create({...post});
        console.log(postRef.current.value);
    };

    return (

        <form action="">
            <MyInput
                ref={postRef}
                value = {  post.name} onChange = {e => setPost({...post, name: e.target.value})}
                type="text" placeholder="title"
            />
            <MyInput
                value = {post.buttonId} onChange = {e => setPost({...post, buttonId : e.target.value})}
                type="text" placeholder="buttonId"
            />
            <MyButton onClick = {addNewPost} text = {"hello world"}> create </MyButton>
        </form>
    );
};

export default PostForm;