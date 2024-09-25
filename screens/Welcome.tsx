import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native'
import React from 'react'
import { colors } from '../css/colorsIndex'
import { ShoppingSale } from '../assets/svg/ShoppingSale'
import { Checkmark } from '../assets/svg/Checkmark'
import * as Haptics from "expo-haptics";
import { navigate } from '../node_modules/@react-navigation/routers/src/CommonActions';

const Welcome = ({ navigation }: any) => {


	const handlePress = () => {
		navigation.navigate("Enterphoneoremail");
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.containerMain}>
				<View style={styles.containerImage}>
					<ShoppingSale />
					<View>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>Welcome</Text>
							<Text style={styles.productSmallText}>The safest platfrom to shop from social media vendors</Text>
						</View>
						<View style={styles.bodyTextContainer}>
							<View style={styles.bodyTextFlex}>
								<Checkmark />
								<Text style={styles.bodyText}>Reach Millions of Shoppers</Text>
							</View>
							<View style={styles.bodyTextFlex}>
								<Checkmark />
								<Text style={styles.bodyText}>Easy Product Listing</Text>
							</View>
							<View style={styles.bodyTextFlex}>
								<Checkmark />
								<Text style={styles.bodyText}>Secure and Fast Payments</Text>
							</View>
							<View style={styles.bodyTextFlex}>
								<Checkmark />
								<Text style={styles.bodyText}>Boost Your Visibility</Text>
							</View>
						</View>
					</View>
				</View>

				<TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
					<Text style={styles.buttonText}>Welcome</Text>
				</TouchableOpacity>

			</View>
		</SafeAreaView>
	)
}

export default Welcome

const styles = StyleSheet.create({
	buttonText: {
		fontFamily: 'DM Sans', // Ensure DM Sans font is properly loaded using Expo or custom fonts in React Native
		fontStyle: 'normal',
		fontWeight: '500', // '500' is equivalent to medium bold
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#FFFFFF',
	},
	buttonContainer: {
		width: 296,
		height: 40,
		padding: 10,
		backgroundColor: '#8A226F',
		borderRadius: 90,
		flexDirection: 'row', // Flexbox layout for row direction
		justifyContent: 'center', // Center the content horizontally
		alignItems: 'center', // Center the content vertically
		shadowColor: '#FE2C55',
		shadowOffset: {
			width: 4,
			height: 8,
		},
		shadowOpacity: 0.2,
		shadowRadius: 24,
		elevation: 5, // For Android shadow support

	},
	titleContainer: {
		marginBottom: 25,
	},
	bodyTextFlex: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},

	bodyTextContainer: {
		width: 296,
		height: 140,
		paddingVertical: 12,
		paddingHorizontal: 16,
		backgroundColor: '#FFEAFA',
		borderColor: '#8A226F',
		borderWidth: 0.5,
		borderRadius: 12,
		flexDirection: 'column', // Flexbox layout
		alignItems: 'flex-start', // Align items to the start
		gap: 12, // For modern React Native versions with Gap support
	},
	bodyText: {
		fontFamily: 'DM Sans', // Make sure this font is loaded in your project
		fontStyle: 'normal',
		fontWeight: '500', // Semi-bold (equivalent to bold for "500")
		fontSize: 14,
		lineHeight: 18, // Matches the height specified
		letterSpacing: 0.005,
	},
	title: {
		fontFamily: 'DM Sans', // Ensure the font is linked or available
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: 36,
		lineHeight: 40, // This line height matches the height of the box
		textAlign: 'center',
		letterSpacing: 0.005,
		alignSelf: 'stretch',
		marginTop: 25,
		marginBottom: 8,
	},
	productSmallText: {
		fontFamily: 'DM Sans', // You need to ensure this font is available or link it if using Expo or other tools
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 18,
		textAlign: 'center',
		letterSpacing: 0.005,
		alignSelf: 'stretch',
	},
	containerImage: {
		width: 296,
		height: 210,
		marginTop: 48,
	},
	containerMain: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 32,
		flex: 1
	},

	container: {
		flexGrow: 1,
		backgroundColor: colors.white,
	}
})