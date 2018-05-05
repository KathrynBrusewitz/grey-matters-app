import {
  StyleSheet
} from 'react-native';

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
  titleText: {
    fontSize: 28, 
    fontWeight: 'bold',
    paddingBottom: 15
  },
  metaData: {
    flexDirection: 'row', 
    borderTopColor: '#ff404e',
    borderTopWidth: 1,
    borderBottomColor: '#ff404e',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  author: {
    flex: 3,
    marginTop: 10,
    marginBottom: 10,
    borderRightColor: '#ff404e',
    borderRightWidth: 1,
    alignItems: 'flex-start',
  },
  date: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  blue: {
    color: '#1ba5b8',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 20,
  },
  term: {
    fontSize: 20,
  },
  description: {
    paddingTop: 5
  },
})

export default styles;
