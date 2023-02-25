import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, 
{ useContext }
     from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
// import { FavoritesContext } from '../store/context/favorite-context';

const MealDetailScreen = ({ route, navigation }) => {
    // const favoriteMealCtx = useContext(FavoritesContext);
    


    // console.log('====================================');
    // console.log(favoriteMealCtx);
    // console.log('====================================');

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)

    function changeFavoriteStatusHandler() {
        // console.log('pressed');
        if(mealIsFavorite){
           favoriteMealCtx.removeFavorite(mealId);
        }else{
            favoriteMealCtx.addFavorite(mealId);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color={'white'}
                    onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])
    // console.log(selectedMeal)
    return (
        <ScrollView style={styles.rootConatiner}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText} />
            <View style={styles.listOuterConatainer}>
                <View style={styles.listConatiner}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>


        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootConatiner: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterConatainer: {
        alignItems: 'center'
    },
    listConatiner: {
        width: '80%',
    }

})