import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import PlaceItem from './PlaceItem';

const PlaceList = ({places}) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
};

const styles = StyleSheet.create({
  fallBackContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fallBackText: {
    fontSize: 16,
  },
});

export default PlaceList;
