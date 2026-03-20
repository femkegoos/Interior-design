import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = () => {
    return (
        <View style={styles.card}>
            <Image source={require("../img/Brown_chair_interior_design.jpg")} style={styles.image} />
            <Text style={styles.title}>Lounge chair</Text>
            <Text style={styles.description}>This is a description.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width:300,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom:16,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginTop: 4,
    },
});

export default ProductCard;