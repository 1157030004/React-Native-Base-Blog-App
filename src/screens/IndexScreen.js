import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(Context);
	return (
		<View>
			<Button title="Add Blog Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blogPosts) => blogPosts.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<AntDesign style={styles.icon} name="delete" />
						</View>
					);
				}}
			/>
		</View>
	);
};

export default IndexScreen;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: "gray",
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	},
});
