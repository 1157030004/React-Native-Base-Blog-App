import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const CreateScreen = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	return (
		<View>
			<Text style={styles.label}>Your Title</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Your Content</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button title="Publish" />
		</View>
	);
};

export default CreateScreen;

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: "gray",
		marginBottom: 15,
		padding: 5,
		margin: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
});
