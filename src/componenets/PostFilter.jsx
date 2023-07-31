import React from 'react';
import MySelect from "./MySelect";
import MyInput from "./MyInput";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput value={filter.search} onChange={event =>setFilter({...filter,search:event.target.value})}/>
            <MySelect
                value={filter.sort} onChange={selected =>setFilter({...filter, sort:selected})}
                options={[
                    {value:'name', title:'name'},
                    { value:'buttonId', title:'buttonId'}
                ]} defaultValue='select'/>
        </div>
    );
};

export default PostFilter;