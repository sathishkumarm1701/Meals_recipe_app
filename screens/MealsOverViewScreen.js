import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';


const MealsOverViewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;
    const displayedMeal = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId).title;
        navigation.setOptions({
            title: categoryTitle,

        })
    }, [catId, navigation])

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeal}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        // color:'black'
    }
})