import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	const { state, editBlogpost } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === id);

	return (
		<BlogPostForm
			initialValues={{
				title: blogPost.title,
				content: blogPost.content,
			}}
			onSubmit={(title, content) => {
				editBlogpost(id, title, content);
			}}
		/>
	);
};

export default EditScreen;

const styles = StyleSheet.create({});
