import React from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet
} from 'react-native';

const GlossaryPage = () => {
  const item = {
    "word": "Synapse",
    "definition": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
    "description": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
    "notes": "a junction between two nerve cells, consisting of a minute gap across which impulses pass by diffusion of a neurotransmitter.",
    "imgURI": 'http://3.bp.blogspot.com/-oulaC4PV0sw/V1Y4OskA1yI/AAAAAAAAb20/_clCVq9Y7DsvpM7CQU6PBJCTwC9D-VEsQCK4B/s1600/synapse.jpg',
    "key": 1,
    "type": "glossarypage"
  }
  return (
    <ScrollView>
    <Image source={{uri: item.imgURI}} style={styles.image}/>
    <View style={styles.container}>
      <View>
        <View style={styles.sectionHeaderBox}>
          <Text style={styles.sectionHeader}>Definition</Text>
        </View>
        <Text style={styles.paragraph}>{item.definition}</Text>
      </View>
      <View>
        <View style={styles.sectionHeaderBox}>
          <Text style={styles.sectionHeader}>Description</Text>
        </View>
        <Text style={styles.paragraph}>{item.description}</Text>
      </View>
      <View>
        <View style={styles.sectionHeaderBox}>
          <Text style={styles.sectionHeader}>Notes</Text>
        </View>
        <Text style={styles.paragraph}>{item.notes}</Text>
      </View>
    </View>
  </ScrollView>
)}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    height: 300
  },
  container: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  sectionHeaderBox: {
    paddingBottom: 2,
    borderBottomWidth: 1,
  },
  sectionHeader: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
  paragraph: {
    paddingTop: 10,
    paddingBottom: 10
  },
})

export default GlossaryPage;
