import React, { createContext, useReducer } from "react";

const BlogContext = createContext();

const blogReducer = (state, action) => {
	switch (action.type) {
		case "add_blogpost":
			return [...state, { title: `Blog Post #${state.length + 1}` }];
		case "edit_blogpost":
		case "delete_blogpost":
		case "default":
			return state;
	}
};

export const BlogProvider = ({ children }) => {
	const [blogPosts, dispatch] = useReducer(blogReducer, []);

	const addBlogPost = () => {
		dispatch({ type: "add_blogpost" });
	};

	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
			{children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
