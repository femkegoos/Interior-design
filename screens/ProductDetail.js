import { StyleSheet, Text, View } from 'react-native';


const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Dit is een componenet</Text>
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
});

export default ProductDetail;