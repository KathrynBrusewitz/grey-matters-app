import {
	StyleSheet,
	Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		paddingLeft: 30,
    paddingRight: 30,
	},
	image: {
		marginTop: 20,
		height: Dimensions.get('window').height - 245,
	},
	title: {
		fontSize: 35,
		textAlign: 'center',
		paddingBottom: 10,
	},
  metaData: {
    flexDirection: 'row', 
    borderTopColor: '#ff404e',
    borderTopWidth: 1,
    borderBottomColor: '#ff404e',
    borderBottomWidth: 1,
    height: 50,
  },
  metaDataBox: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 13,
    alignItems: 'flex-start',
  },
  small: {
    flex: 1,
  },
  large: {
		flex: 2,
		borderRightColor: '#ff404e',
    borderRightWidth: 1,
	},
	blue: {
    color: '#1ba5b8',
  },
})

export default styles;
