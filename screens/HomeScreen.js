import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCards';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop</Text>
        <TextInput style={styles.searchInput} placeholder="Search for products..." />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        margin: 16,
        width: '90%',
    },
    title: {
        marginTop: 64,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
});

export default HomeScreen;