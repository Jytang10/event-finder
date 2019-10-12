//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import data from '../db';
class AllEvents extends Component {

  state = {
    data: data
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{width:'100%'}}
          data={this.state.data}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <View>
                    <Text>{item.eventName}</Text>
                    <View>
                      <View>
                        <Text>Type</Text>
                        <Text>{item.genre}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}
        >
          
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f6',
  },
});

export default AllEvents;
