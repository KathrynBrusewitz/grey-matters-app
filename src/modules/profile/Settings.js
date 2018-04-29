import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';
import styles from './SettingsStyles';

const Settings = () => (
	<View style={styles.container}>
		<Text style={styles.option}>
			Edit Profile
		</Text>
		<Text style={styles.option}>
			Change Password
		</Text>
		<Text style={styles.option}>
			Notifications
		</Text>
		<Link to="/signup" >
			<Text style={styles.option}>
				Sign Up
			</Text>
		</Link>
	</View>
)

export default Settings;