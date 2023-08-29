import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			{/* Categoy Card */}
			<CategoryCard
				imgUrl="https://links.papareact.com/gn7"
				title="Testing 1"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/gn7"
				title="Testing 2"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/gn7"
				title="Testing 3"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/gn7"
				title="Testing 3"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/gn7"
				title="Testing 3"
			/>
			<CategoryCard
				imgUrl="https://links.papareact.com/gn7"
				title="Testing 3"
			/>
		</ScrollView>
	);
};

export default Categories;

const styles = StyleSheet.create({});
