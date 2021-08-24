// import {View} from 'native-base';
// import React, {Component} from 'react';
// import {Text} from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import RNFetchBlob from 'rn-fetch-blob';
// import styles from './styles';

// export default class index extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <RNCamera
//                     ref={(ref) => {
//                         this.camera = ref;
//                     }}
//                     style={styles.preview}
//                     type={RNCamera.Constants.Type.back}
//                     flashMode={RNCamera.Constants.FlashMode.on}></RNCamera>
//                 <View
//                     style={{
//                         flex: 0,
//                         flexDirection: 'row',
//                         justifyContent: 'center',
//                     }}>
//                     <TouchableOpacity
//                         onPress={this.takePicture.bind(this)}
//                         style={styles.capture}>
//                         <Text style={{ fontSize: 14 }}>SNAP</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }

//     takePicture = async () => {
//         if (this.camera) {
//             const options = {quality: 0.5, base64: true};
//             const data = await this.camera.takePictureAsync(options);
//             console.log(data.base64);
//             const path = `${RNFetchBlob.fs.dirs.CacheDir}/test.png`;
//             console.log('path', path);
//             try {
//                 RNFetchBlob.fs.writeFile(path, data.base64, 'base64');
//             } catch (error) {
//                 console.log(error.message);
//             }
//         }
//     };
// }
