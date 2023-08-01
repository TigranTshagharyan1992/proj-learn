import React, {useMemo, useRef, useState, useEffect} from 'react';
import Counter from "./componenets/Counter";
import PostList from "./componenets/PostList";
import PostForm from "./componenets/PostForm";
import PostFilter from "./componenets/PostFilter";
import {useSortedAndSearch} from "./hooks/UsePosts";
import axios from "axios";


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    const [posts, setPosts] = useState([
        {title: "button name 2", buttonId: "3"},
        {title: "button name 33", buttonId: "2"},
        {title: "button name 1", buttonId: "1"},
    ]);

    const [filter, setFilter] = useState({sort:'',search:''});

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };

    const removePost = (buttonId) =>{
        setPosts(posts.filter((post)=>{
            return post.buttonId !== buttonId;
        }))
    };


    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        await setPosts(response.data);
    }
    useEffect( () =>{
        fetchPosts();
    },[]);
    const sortedAndSearch = useSortedAndSearch(posts,filter.sort,filter.search);


    return (
        <div className="App">
            <Counter/>
          <PostForm create={createPost} />
          <PostFilter filter={filter} setFilter={setFilter}/>
          <PostList posts={sortedAndSearch} value={7777} removePost={removePost}/>
        </div>
    );
}

export default App;
