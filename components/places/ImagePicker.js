import React, {useState} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import {Colors} from '../../constants/colors';
import OutlinedButton from '../ui/OutlinedButton';

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();

  //for ios
  const [cameraPermissonInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermission() {
    if (cameraPermissonInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissonInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insfficient Permission!',
        'You need to grant camera permission to use this app.',
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    // for android
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
    console.log(image.assets[0].uri);

    setPickedImage(image.assets[0].uri);
  }
  let imagePreview = <Text>No image taken yet.</Text>;
  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};
const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImagePicker;
