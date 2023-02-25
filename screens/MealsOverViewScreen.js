import React, { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';


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

    
   return(
    <MealsList items={displayedMeal}/>
   )
}

export default MealsOverViewScreen

