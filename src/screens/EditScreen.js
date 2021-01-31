import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../Components/BlogPostForm"


const EditScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam("id")
	);



	return <BlogPostForm />
};

export default EditScreen;

const styles = StyleSheet.create({});
