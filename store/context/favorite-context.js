import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { createContext } from 'react';


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
})

export function FavoriteContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id) {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }
    function removeFavorite(id) {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id)
        );
    }

    const value = {
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }
    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

const styles = StyleSheet.create({})