import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
	const { data, addBlogPost } = useContext(BlogContext);
	return (
		<View>
			<Text>Index Screen</Text>
			<Button title="Add Blog Post" onPress={addBlogPost} />
			<FlatList
				data={data}
				keyExtractor={(blogPosts) => blogPosts.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>;
				}}
			/>
		</View>
	);
};

export default IndexScreen;

const styles = StyleSheet.create({});