import React, {useMemo, useRef, useState} from 'react';
import Counter from "./componenets/Counter";
import PostList from "./componenets/PostList";
import PostForm from "./componenets/PostForm";
import PostFilter from "./componenets/PostFilter";


/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    const [posts, setPosts] = useState([
        {name: "button name 2", buttonId: "3"},
        {name: "button name 33", buttonId: "2"},
        {name: "button name 1", buttonId: "1"},
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

    const sortedPosts = useMemo(() =>{
        if(filter.sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    },[filter.sort,posts]);

    const sortedAndSearch = useMemo(() => {
        return sortedPosts.filter(post => post.name.includes(filter.search));
    }, [filter.search, sortedPosts]);


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
