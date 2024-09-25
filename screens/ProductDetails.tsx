import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import { ArrowBack } from '../assets/svg/ArrowBack';
import { MoreVert } from '../assets/svg/MoreVert';
import { Mark } from '../assets/svg/Mark';
import { MarkDown } from '../assets/svg/MarkDown';
import { X } from '../assets/svg/X';
import Checkbox from 'expo-checkbox';
import * as Haptics from 'expo-haptics';
import { More } from '../assets/svg/More'
import { Image as Images } from '../assets/svg/Image'


const ProductDetails = ({ navigation }: any) => {
	const [isChecked, setChecked] = useState(false);
	const [isEnabled, setIsEnabled] = useState(true);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);
	const handleBack = () => {
		navigation.goBack();
	};
	const handlePress = () => {
		navigation.navigate("ProductDetails");
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};

	// Array representing each section
	const sections = [
		{ id: 1, image: require('../assets/frame2.png'), label: 'logo.Img' },
		{ id: 2, image: require('../assets/frame2.png'), label: 'logo.Img' },
		{ id: 3, image: require('../assets/frame2.png'), label: 'logo.Img' },
		{ id: 4, image: require('../assets/frame2.png'), label: 'logo.Img' },
	];

	const options = [
		{
			id: 1,
			label: 'Option 1',
			inputText: 'Color',
			chips: ['Red', 'Small', 'XL'],
		},
		{
			id: 2,
			label: 'Option 2',
			inputText: 'Color',
			chips: ['Large', 'Small', 'XL'],
		},
		{
			id: 3,
			label: 'Option 3',
			inputText: 'Color',
			chips: ['Red', 'White', 'Black'],
		},
	];
	return (
		<SafeAreaView style={styles.container} >
			<ScrollView style={styles.container_title} contentContainerStyle={styles.scrollViewContent}>
				<View style={styles.MoreVertcontainer}>
					<TouchableOpacity onPress={handleBack} style={styles.arrowBackcontainer}>
						<ArrowBack />
						<Text style={styles.arrowBackText}>Product details</Text>
					</TouchableOpacity>
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
						<Text style={styles.label}>Product collection</Text>
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
						<Text style={styles.label}>Inventory stocks</Text>
						<Text style={styles.inputText}>50</Text>
					</View>
				</View>

				<View style={[styles.draftContainer2, styles.up]}>
					<Text style={styles.sectionTitle}>Product images</Text>
					<MarkDown />
				</View>
				<View style={styles.draftContainerMain}>

					<View style={styles.sectionImagesmainContainer}>
						{sections.map(section => (
							<View key={section.id} style={styles.sectionSwitchMain}>
								<View style={styles.sectionImagesContainer}>
									<View style={styles.sectionImages}>
										<Image source={section.image} />
									</View>
									<Text style={styles.logoText}>{section.label}</Text>
								</View>

								<View style={styles.sectionSwitch}>
									<More />
									<Switch
										trackColor={{ false: '#fff', true: '#8A226F' }}
										thumbColor={isEnabled ? '#fff' : '#fff'}
										ios_backgroundColor="#3e3e3e"
										onValueChange={toggleSwitch}
										value={isEnabled}
									/>
								</View>
							</View>
						))}
					</View>
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Add image</Text>
						<Images />
					</TouchableOpacity>
				</View>

				<View>
					<Text style={styles.sectionTitle}>Inventory variations</Text>
					<View style={styles.ShippingText_container}>
						<Checkbox
							style={styles.checkbox}
							value={isChecked}
							onValueChange={setChecked}
							color={isChecked ? '#8A226F' : undefined}
						/>
						<Text style={styles.ShippingText}>This product is variable; has different colors, sizes, weight, materials, etc.</Text>
					</View>
				</View>

				<View style={styles.inputTextMoreContainer}>

					{options.map(option => (
						<View key={option.id} style={[styles.containerInputOne5, styles.containerInputSpace]}>
							<View style={styles.inputTextMore}>
								<View>
									<Text style={styles.label}>{option.label}</Text>
									<Text style={styles.inputText}>{option.inputText}</Text>
								</View>
								<More />
							</View>

							<View style={styles.chipContainerFlex}>
								{option.chips.map((chip, index) => (
									<View key={index} style={styles.chipContainer1}>
										<Text>{chip}</Text>
										<X />
									</View>
								))}
							</View>

							<Text style={styles.inputTextfull}>Enter values</Text>
						</View>
					))}
					<TouchableOpacity style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Add new option</Text>
						<Images />
					</TouchableOpacity>
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


	inputTextMoreContainer: {
		flexDirection: "column",
		alignItems: 'center',
		gap: 20,
		marginTop: 20,
	},
	inputTextMore: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between"
	},
	containerInputSpace: {
		gap: 15
	},

	up: {
		marginTop: 20,
	},
	draftContainerMain: {
		gap: 15,
	},
	sectionImagesmainContainer: {
		gap: 15,
	},

	scrollViewContent: {
		paddingBottom: 120,
	},

	logoText: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
	},

	sectionSwitchMain: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: "space-between",
	},
	sectionSwitch: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	sectionImagesContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},

	sectionImages: {
		width: 60,
		height: 60,
		backgroundColor: 'rgba(0, 0, 0, 0.03)',
		borderRadius: 8,
	},

	chipContainerFlex: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},

	chipContainer1: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 4,
		paddingVertical: 2,
		width: 65,
		height: 22,
		backgroundColor: 'rgba(0, 0, 0, 0.03)',
		borderRadius: 90,
		shadowColor: 'rgba(0, 0, 0, 0.03)',
		shadowOpacity: 1,
		shadowRadius: 0,
		elevation: 1,
		gap: 5,
		padding: 5,
	},
	chipContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 4,
		paddingVertical: 2,
		width: 90,
		height: 22,
		backgroundColor: 'rgba(0, 0, 0, 0.03)',
		borderRadius: 90,
		shadowColor: 'rgba(0, 0, 0, 0.03)',
		shadowOpacity: 1,
		shadowRadius: 0,
		elevation: 1,
		gap: 5,
		padding: 5,
	},
	label: {
		width: 100,
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
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		alignSelf: 'stretch',
		color: "#00000099",
	},
	inputText: {
		width: 308,
		height: 18,
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		alignSelf: 'stretch',
		flexGrow: 0,
	},

	containerInputOneSub3: {
		flexDirection: "column",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 4,
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
	containerInputOne5: {
		flexDirection: "column",
		paddingHorizontal: 16,
		paddingVertical: 8,
		gap: 4, // Gap between elements (for React Native >= 0.70)
		width: '100%',
		height: 122,
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
		width: 47,
		height: 18,
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#8A226F',

	},
	buttonTwo: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		width: 159,
		height: 40,
		borderColor: '#8A226F',
		borderWidth: 1,
		borderRadius: 90,
		backgroundColor: "#8A226F"
	},
	buttonOne: {

		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
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
		fontFamily: 'DM Sans',
		fontSize: 14,
		color: '#8A226F',
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
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',  // Bold
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#000000E5',
	},
	sectionTitle: {
		height: 18,
		fontFamily: 'DM Sans',
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