import React from 'react';

const MyInput = React.forwardRef((props, postRef) => {

    return (
        <input  {...props} ref={postRef}/>
    );
});

export default MyInput;