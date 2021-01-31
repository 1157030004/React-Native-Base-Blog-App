import React, { useContext } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Button,
	TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);
	return (
		<View>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(blogPosts) => blogPosts.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate("Show", { id: item.id })}>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<AntDesign style={styles.icon} name="delete" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default IndexScreen;

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate("Create")}>
				<AntDesign name="plus" size={30} />
			</TouchableOpacity>
		),
	};
};

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
