import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() =>{
        if(sort){
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[sort]));
        }
        return posts;
    },[sort,posts]);
};