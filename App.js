import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I've paid my dues
Time after time
I've done my sentence
But committed no crime
And bad mistakes
I've made a few
I've had my share of sand
Kicked in my face
But I've come through
And we mean to go on and on and on and on
We are the champions, my friends
And we'll keep on fighting till the end
We are the champions
We are the champions
No time for losers
'Cause we are the champions of the World
I've taken my bows
And my curtain calls
You brought me fame and fortune
And everything that goes with it
I thank you all
But it's been no bed of roses
No pleasure cruise
I consider it a challenge before
The human race
And I ain't gonna lose</Text>
      <StatusBar style="auto" />
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
