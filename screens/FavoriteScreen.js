import { StyleSheet, Text, View } from 'react-native'
// import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../store/context/favorite-context'
import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'

const FavoriteScreen = () => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))
    console.log(favoriteMeals);
    
    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootConatainer}>
                <Text style={styles.text}>You have no favourite meals yet.</Text>
            </View>
        )
    }
    return (
        <MealsList items={favoriteMeals} />
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    rootConatainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'

    }
})