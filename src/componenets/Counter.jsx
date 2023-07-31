import React, {useState} from 'react';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Counter = () => {
    const [likes, setLikes] = useState(1);
    const [text, setText] = useState('Hello world');
    return (
        <div className="counter-class">
            <div className="counter-block">
                <p>Likes: {likes}</p>
                <p>{text}</p>
                <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
                <button onClick={()=>setLikes(likes+1)}>Likes</button>
                <button onClick={()=>setLikes(likes-1)}>Dislikes</button>
            </div>
        </div>
    );
};

export default Counter;