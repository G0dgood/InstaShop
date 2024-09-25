


import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ArrowBack } from '../assets/svg/ArrowBack'
import { MoreVert } from '../assets/svg/MoreVert'
import { Mark } from '../assets/svg/Mark'
import { MarkDown } from '../assets/svg/MarkDown'
import { X } from '../assets/svg/X'
import TextInput from '../components/Input/TextInput';
import Checkbox from 'expo-checkbox';
import * as Haptics from 'expo-haptics';
import { BackgroundColor } from '../node_modules/@isaacs/cliui/node_modules/ansi-styles/index.d';


const ProductDetails = ({ navigation }: any) => {
	const [isChecked, setChecked] = useState(false);
	const handleBack = () => {
		navigation.goBack();
	};
	const handlePress = () => {
		navigation.navigate("ProductDetails");
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};


	return (
		<SafeAreaView style={styles.container} >
			<ScrollView style={styles.container_title}>
				<View style={styles.MoreVertcontainer}>
					<View style={styles.arrowBackcontainer}>
						<TouchableOpacity onPress={handleBack}>
							<ArrowBack />
						</TouchableOpacity>
						<Text style={styles.arrowBackText}>Product details</Text>
					</View>
					<View>
						<MoreVert />
					</View>
				</View>

				<View style={styles.draftContainer}>
					<TouchableOpacity style={styles.chipPicker}>
						<Text>Draft</Text>
						<Mark />
					</TouchableOpacity>

					<Text style={styles.buyNowText}>Preview product</Text>
				</View>


				<View style={styles.draftContainer2}>
					<Text style={styles.sectionTitle}>Basic details</Text>
					<MarkDown />
				</View>

				<View style={styles.container_box_TextInput}>
					<View style={styles.containerInputOne}>
						<Text style={styles.label}>Product Title</Text>
						<Text style={styles.inputText}>Place holder</Text>
					</View>
					<View style={styles.containerInputOneSub3}>
						<Text style={styles.label}>Product description</Text>
						<Text style={styles.inputText}>Place holder</Text>
					</View>

					<View style={styles.price_container}>
						<View style={styles.containerInputOneSub}>
							<Text style={styles.label}>Price</Text>
							<Text style={styles.inputText}>Place holder</Text>
						</View>
						<View style={styles.containerInputOneSub}>
							<Text style={styles.label}>Old price</Text>
							<Text style={styles.inputText}>Place holder</Text>
						</View>
					</View>

					<View style={styles.containerInputOne4}>
						<Text style={styles.label}>Product Title</Text>
						<View style={styles.chipContainerFlex}>
							<View style={styles.chipContainer}>
								<Text>Collection</Text>
								<X />
							</View>
							<View style={styles.chipContainer}>
								<Text>Interests</Text>
								<X />
							</View>
						</View>

						<Text style={styles.inputTextfull}>Search or create collection</Text>
					</View>

					<View style={styles.containerInputOne}>
						<Text style={styles.label}>Product Title</Text>
						<Text style={styles.inputText}>50</Text>
					</View>
				</View>

				<View>
					<View style={styles.draftContainer2}>
						<Text style={styles.sectionTitle}>Basic details</Text>
						<MarkDown />
					</View>

					<View>
						<View>
							<View></View>
							<Text>logo.Img</Text>
						</View>


						<View>
							<View></View>
							<View></View>
						</View>
					</View>
				</View>

			</ScrollView>
			<View style={styles.container_back_next}>
				<TouchableOpacity
					style={styles.buttonOne}
					onPress={handleBack} >
					<Text style={styles.buyNowTextWhite}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonTwo}
					onPress={handlePress}
				>
					<Text style={styles.buttonText1}>Continue</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default ProductDetails

const styles = StyleSheet.create({

	chipContainerFlex: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},

	chipContainer: {
		flexDirection: 'row', // Flex direction row
		justifyContent: 'center', // Center content horizontally
		alignItems: 'center', // Center content vertically
		paddingHorizontal: 4, // Padding 4px on the sides
		paddingVertical: 2, // Padding 2px top and bottom
		width: 90,
		height: 22,
		backgroundColor: 'rgba(0, 0, 0, 0.03)',  // Background color
		borderRadius: 90, // Rounded corners
		shadowColor: 'rgba(0, 0, 0, 0.03)', // Shadow to mimic linear gradient effect
		shadowOpacity: 1,
		shadowRadius: 0,
		elevation: 1,
		gap: 5,
		padding: 5,
	},
	label: {
		width: 60,
		height: 13,
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 10,
		lineHeight: 13,
		letterSpacing: 0.005,
		color: "#00000099"
	},

	inputTextfull: {
		width: 308,
		height: 18,
		fontFamily: 'DM Sans', // Ensure the font is loaded
		fontStyle: 'normal',
		fontWeight: '500', // Bold styling (medium in this case)
		fontSize: 14,
		lineHeight: 18, // Matches height
		letterSpacing: 0.005, // Slight letter spacing
		alignSelf: 'stretch',
		color: "#00000099",
	},
	inputText: {
		width: 308,
		height: 18,
		fontFamily: 'DM Sans', // Ensure the font is loaded
		fontStyle: 'normal',
		fontWeight: '500', // Bold styling (medium in this case)
		fontSize: 14,
		lineHeight: 18, // Matches height
		letterSpacing: 0.005, // Slight letter spacing
		alignSelf: 'stretch', // Align self stretch to fill container's available width
		flexGrow: 0, // Prevent from growing in the layout
	},

	containerInputOneSub3: {
		flexDirection: "column",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 4, // Gap between elements (for React Native >= 0.70)
		width: '100%',
		height: 68,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#00000033",
	},
	containerInputOneSub: {
		flexDirection: "column",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 4, // Gap between elements (for React Native >= 0.70)
		width: '48%',
		height: 52,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#00000033",
	},
	containerInputOne4: {
		flexDirection: "column",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 4, // Gap between elements (for React Native >= 0.70)
		width: '100%',
		height: 83,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#00000033",
	},
	containerInputOne: {
		flexDirection: "column",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 4, // Gap between elements (for React Native >= 0.70)
		width: '100%',
		height: 52,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#00000033",

	},

	buyNowTextWhite: {
		width: 47, // Width of the text
		height: 18, // Height of the text
		fontFamily: 'DM Sans', // Font family
		fontStyle: 'normal', // Font style
		fontWeight: '500', // Font weight
		fontSize: 14, // Font size
		lineHeight: 18, // Line height
		letterSpacing: 0.005, // Letter spacing
		color: '#8A226F', // Text color

	},
	buttonTwo: {
		display: 'flex', // Flexbox layout
		flexDirection: 'row', // Horizontal alignment
		justifyContent: 'center', // Center the content horizontally
		alignItems: 'center', // Center the content vertically
		padding: 10,
		width: 159,
		height: 40,
		borderColor: '#8A226F',
		borderWidth: 1,
		borderRadius: 90,
		backgroundColor: "#8A226F"
	},
	buttonOne: {
		display: 'flex', // Flexbox layout
		flexDirection: 'row', // Horizontal alignment
		justifyContent: 'center', // Center the content horizontally
		alignItems: 'center', // Center the content vertically
		padding: 10,
		width: 159,
		height: 40,
		borderColor: '#8A226F',
		borderWidth: 1,
		borderRadius: 90,
	},
	buttonText1: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#FFFFFF',
	},
	buttonContainer1: {
		width: 328,
		height: 40,
		padding: 10,
		backgroundColor: '#8A226F',
		borderRadius: 90,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#FE2C55',
		shadowOffset: {
			width: 4,
			height: 8,
		}
	},
	container_back_next: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		paddingHorizontal: 20,
		marginTop: 20,
		paddingTop: 40,
		paddingBottom: 60,
		position: "absolute",
		bottom: 0,
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "rgba(31, 31, 31, 0.08)",
		height: 50,
		zIndex: 100,
		gap: 10,
	},
	checkbox: {
		margin: 8,
	},
	ShippingText_container: {
		marginTop: 15,
		flexDirection: 'row',
		alignItems: 'center',
		width: 284
	},

	ShippingText: {
		fontFamily: 'DM Sans',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#00000099',
	},
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "center",
		marginBottom: 20,
		height: 40,
		borderRadius: 90,
		backgroundColor: "#00000008",
		gap: 5,
	},

	buttonText: {
		fontFamily: 'DM Sans', // Ensure this font is linked correctly
		fontSize: 14, // Adjust font size as necessary
		color: '#8A226F', // Text color
	},



	price_container_price: {
		width: "50%"
	},
	price_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
		gap: 12,
	},
	container_box_TextInput: {
		gap: 10
	},
	sectionTitlesub: {
		height: 18,
		fontFamily: 'DM Sans',  // Ensure you have the font properly linked
		fontStyle: 'normal',
		fontWeight: '500',  // Bold
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#000000E5',
	},
	sectionTitle: {
		height: 18,
		fontFamily: 'DM Sans',  // Ensure you have the font properly linked
		fontStyle: 'normal',
		fontWeight: '500',  // Bold
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#000000',
	},
	buyNowText: {
		width: 94,
		height: 16,
		fontFamily: 'DM Sans',  // Make sure the font is correctly linked in your project
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 12,
		lineHeight: 16,  // Matches height
		letterSpacing: 0.005,
		color: '#8A226F',

	},
	draftContainer2: {
		flexDirection: 'row', // Row layout 
		alignItems: 'center', // Vertical center
		justifyContent: "space-between",
		marginBottom: 20
	},
	draftContainerSub: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
	},
	draftContainer3: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
		marginTop: 20,
		marginBottom: 20
	},
	draftContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
		marginTop: 20,
		marginBottom: 20
	},
	chipPicker: {
		flexDirection: 'row', // Row layout
		justifyContent: 'center', // Horizontal center
		alignItems: 'center', // Vertical center
		paddingVertical: 2,
		paddingHorizontal: 4,
		width: 65,
		height: 22,
		borderRadius: 90,
		borderColor: "#0000001A",
		borderWidth: 1,
		gap: 6,
	},
	MoreVertcontainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	arrowBackText: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 18,
		letterSpacing: 0.005,
	},

	arrowBackcontainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	container_title: {
		paddingHorizontal: 10,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})