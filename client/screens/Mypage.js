import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const MyPage = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'black'}}>버튼입니다</Text>
      </TouchableOpacity>
      <Text>MyPage</Text>
      <Button title="Searchpage 열기" onPress={() => navigation.navigate('SearchPage')} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default MyPage;