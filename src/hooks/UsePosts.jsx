import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() =>{
        if(sort){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    },[sort,posts]);
    return sortedPosts;
};

export const useSortedAndSearch = (posts, sort,search) =>{
    console.log(posts);
    const sortedPosts = useSortedPosts(posts, sort);

    const data = useMemo(() => {
        return sortedPosts.filter(post => post.title.includes(search));
    }, [search, sortedPosts]);

    return data;
};