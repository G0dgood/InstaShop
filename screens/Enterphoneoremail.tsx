import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { CheckBox, LinearProgress, } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { ArrowBack } from '../assets/svg/ArrowBack'
import { colors } from '../css/colorsIndex';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import TextInput from '../components/Input/TextInput';
import { Instagram } from '../assets/svg/Instagram'
import { TikTok } from '../assets/svg/TikTok'
import { Insta } from '../assets/svg/Insta'
import { Google } from '../assets/svg/Google'


const Enterphoneoremail = () => {

	const navigation = useNavigation();


	const [selectedIndex1, setIndex1] = React.useState<any>(null);
	const [selectedIndex2, setIndex2] = React.useState<any>(null);
	const [selectedIndex3, setIndex3] = React.useState<any>(null);
	const [selectedIndex4, setIndex4] = React.useState<any>(null);
	const [selectedIndex5, setIndex5] = React.useState<any>(null);
	const [next, setNext] = React.useState(1);



	useEffect(() => {
		let count = 0;
		if (selectedIndex1 !== null) count++;
		if (selectedIndex2 !== null) count++;
		if (selectedIndex3 !== null) count++;
		if (selectedIndex4 !== null) count++;
		if (selectedIndex5 !== null) count++;

	}, [selectedIndex1, selectedIndex2, selectedIndex3, selectedIndex4, selectedIndex5]);





	const handleBack = () => {
		navigation.goBack();
	};



	const handlePress = () => {
		navigation.navigate("ProductEdit");
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
	};



	return (
		<SafeAreaView style={styles.container} >
			<View style={styles.container_title}>
				<View style={styles.arrowBackcontainer}>
					<TouchableOpacity onPress={handleBack}>
						<ArrowBack />
					</TouchableOpacity>
					<Text style={styles.arrowBackText}>Get started</Text>
				</View>
				<View style={styles.arrowColorContainer}>
					<View style={next >= 1 ? styles.arrowColorLine : styles.arrowColorLine2}></View>
					<View style={next >= 2 ? styles.arrowColorLine : styles.arrowColorLine2}></View>
					<View style={next >= 3 ? styles.arrowColorLine : styles.arrowColorLine2}></View>
				</View>
				<ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.scrollViewContainer}>
					{next === 1 ?
						<View>
							<View style={styles.container_title_check_Container}>
								<Text style={styles.container_title_text_check}>
									Enter your phone number or email to get started
								</Text>
								<Text style={styles.container_title_text_small}>
									We will send you a verification code for confirmation
								</Text>
								<View>
									<TextInput
										placeholder={'Enter phone number of email'}
									/>
								</View>
							</View>
						</View>
						: next === 2 ?
							<View>
								<View style={styles.container_title_check_Container}>
									<Text style={styles.container_title_text_check}>
										Complete profile setup
									</Text>
									<Text style={styles.container_title_text_small}>
										Connect your socials for quick setup
									</Text>
									<View style={styles.arrowColorContainer}>
										<View style={styles.container_box}>
											<Instagram />
										</View>
										<View style={styles.container_box}>
											<TikTok />
										</View>
										<View style={styles.container_box}>
											<Google />
										</View>
									</View>
								</View>
								<View style={styles.container_box_TextInput}>
									<TextInput placeholder={'Full name'} label={"Or enter manually"} mb={5} />
									<TextInput placeholder={'Username'} />
									<TextInput placeholder={'Phone number'} />
									<TextInput placeholder={'Email'} />
								</View>
							</View>
							: next === 3 &&
							<View>
								<View style={styles.container_title_check_Container}>


									<View style={styles.uploadContainer}>

										<ImageBackground
											source={require('../assets/profile.png')}  // Corrected local image source
											style={styles.imageBackground}
										>
											<Insta />
										</ImageBackground>


										<Text style={styles.upload_logo_text}>Upload store logo</Text>


									</View>
								</View>
								<View style={styles.container_box_TextInput}>
									<TextInput placeholder={'Store name'} mb={0} />
									<TextInput placeholder={'Store tag name'} />
									<TextInput placeholder={'Store phone number'} />
									<TextInput placeholder={'Store email'} />
									<TextInput placeholder={'Category'} />
								</View>
							</View>
					}
				</ScrollView>
			</View>
			<View style={styles.container_back_next}>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={next === 3 ? handlePress : () => setNext(next + 1)}
				>
					<Text style={styles.buttonText}>Continue</Text>
				</TouchableOpacity>

			</View>
		</SafeAreaView>
	);
};

export default Enterphoneoremail

const styles = StyleSheet.create({



	imageBackground: {
		width: 80,
		height: 80,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Linear gradient background overlay
		borderRadius: 152.94,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center', // Equivalent to backdrop-filter: blur
	},
	imageStyle: {
	},

	uploadImageContainer: {

	},

	upload_logo_text: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 12,
		lineHeight: 16,
		letterSpacing: 0.005,
		color: "#00000066"
	},
	uploadContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 4,
		gap: 12,
		width: "100%",
		height: 140,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#00000033"
	},
	container_box_TextInput: {
		gap: 0
	},

	container_box: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 40,
		width: 101.33,
		height: 48,
		backgroundColor: '#00000008',
		borderRadius: 12,
		marginBottom: 24
	},
	arrowColorLine2: {
		width: 104,
		height: 4,
		backgroundColor: '#0000001A',
		borderRadius: 15,
	},
	arrowColorLine: {
		width: 104,
		height: 4,
		backgroundColor: '#8A226F',
		borderRadius: 15,
	},

	arrowColorContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		marginTop: 20,
	},
	arrowBackcontainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},

	arrowBackText: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 16,
		lineHeight: 18,
		letterSpacing: 0.005,

	},
	container_title_text_small: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		marginTop: 16,
		width: 320,
	},

	buttonText: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 18,
		letterSpacing: 0.005,
		color: '#FFFFFF',
	},
	buttonContainer: {
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
	focusedStyle: {
		borderColor: colors.accent_green,
		borderBottomWidth: 0,
		borderBottomColor: colors.accent_green,
	},
	textArea: {
		borderBottomColor: colors.accent_green,
		borderWidth: 1,
		borderColor: colors.accent_green,
		borderRadius: 5,
		paddingHorizontal: 10,
		backgroundColor: 'white',
		fontSize: 16,
		minHeight: 100,
	},
	login_account: {
		height: 50,
		marginTop: 80,
	},
	checkboxContainer: {
		backgroundColor: 'transparent',

	},

	scrollViewContainer: {
		flexGrow: 1,
		paddingBottom: 120,
		marginHorizontal: 10,
	},

	container_back_next: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		paddingHorizontal: 20,
		marginTop: 20,
		paddingTop: 20,
		marginBottom: 40,
		position: "absolute",
		bottom: 0,
		backgroundColor: "white",
		borderTopWidth: 1,
		borderTopColor: "rgba(31, 31, 31, 0.08)",
		height: 50,
		zIndex: 100
	},

	container_checkBox: {
		flexDirection: "row",
		alignItems: "center",
	},

	container_title_check_Container: {
		marginTop: 20
	},

	container_title_text_check: {
		fontFamily: 'DM Sans',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 24,
		lineHeight: 26,
		letterSpacing: 0.005,
	},


	container_title_p: {
		fontStyle: "normal",
		fontWeight: 400,
		fontSize: 12,
		lineHeight: 20,
		letterSpacing: -0.5,
		color: "rgba(31, 31, 31, 0.86)",
	},

	container_title: {
		// marginTop: 10,
		paddingHorizontal: 10,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})