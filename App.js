import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from './src/staff/loading/index';
import Login from './src/staff/auth/login/index';
import Register from './src/staff/auth/register/index';
import LoginOtp from './src/staff/auth/otp/index';
import ScanQrResult from './src/staff/qrcode/index';
import Dashboard from './src/staff/dashboard/index';
import Profile from './src/staff/profile/index';
import EditProfile from './src/staff/profile/edit_profile/index';
import Productivity from './src/staff/profile_timeline/index';
import AskIdentityWarning from './src/staff/ask_collect_identity_warning/index';
import AskIdentityAfterOTP from './src/staff/ask_collect_identity/index';
import CollectIdentity from './src/staff/collect_identity/index';
import InformasiKesehatan from './src/staff/informasi_kesehatan/index';
import InformasiMedis from './src/staff/informasi_medis/index';
import CovidRisk from './src/staff/covid_risk/index';
import ClockOut from './src/staff/clock_out/index';
import ClockIn from './src/staff/clock_in/index';
import UjiPcrIndex from './src/staff/uji_pcr/index/index';
import HomePcr from './src/staff/uji_pcr/index/home_pcr/index';
import OptionRs from './src/staff/uji_pcr/index/option_rs/index';
import QrcodePcr from './src/staff/uji_pcr/index/qrcode_pcr/index';
import Telemedicine from './src/staff/telemedicine/index';
import StatistikInvestasi from './src/staff/statistik_investasi/index';
import StokDarahHome  from './src/staff/stok_darah/home/index';
import StokDarah  from './src/staff/stok_darah/stok/index';
import KebutuhanDarah  from './src/staff/stok_darah/kebutuhan/index';
import MobilUnit from './src/staff/mobil_unit/mobil_unit/index';
import MobilUnitHome from './src/staff/mobil_unit/home/index';
import Home from './src/staff/user_management/home/index';
import RegisterUTD from './src/staff/user_management/register/index';
import LoginUTD from './src/staff/user_management/login/index';
import DetailUser from './src/staff/user_management/detail/index';


export default class App extends React.Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="StatistikInvestasi"
                        // options={{title: 'StatistikInvestasi Staff'}}
                        options={{headerShown: false}}
                        component={StatistikInvestasi}
                    />
                    <Stack.Screen
                        name="Telemedicine"
                        // options={{title: 'Telemedicine Staff'}}
                        options={{headerShown: false}}
                        component={Telemedicine}
                    />
                    <Stack.Screen
                        name="Loading"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={Loading}
                    />
                    <Stack.Screen
                        name="StokDarahHome"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={StokDarahHome}
                    />
                    <Stack.Screen
                        name="KebutuhanDarah"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={KebutuhanDarah}
                    />
                    <Stack.Screen
                        name="StokDarah"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={StokDarah}
                    />
                    <Stack.Screen
                        name="MobilUnitHome"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={MobilUnitHome}
                    />
                    <Stack.Screen
                        name="Home"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={Home}
                    />
                    <Stack.Screen
                        name="RegisterUTD"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={RegisterUTD}
                    />
                    <Stack.Screen
                        name="LoginUTD"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={LoginUTD}
                    />
                    <Stack.Screen
                        name="DetailUser"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={DetailUser}
                    />
                    <Stack.Screen
                        name="MobilUnit"
                        // options={{title: 'Loading Staff'}}
                        options={{headerShown: false}}
                        component={MobilUnit}
                    />
                    <Stack.Screen
                        name="Register"
                        // options={{title: 'Register Staff'}}
                        options={{headerShown: false}}
                        component={Register}
                    />
                    <Stack.Screen
                        name="LoginOtp"
                        // options={{title: 'Login OTP'}}
                        options={{headerShown: false}}
                        component={LoginOtp}
                    />
                    <Stack.Screen
                        name="UjiPcrIndex"
                        // options={{title: 'Login OTP'}}
                        options={{headerShown: false}}
                        component={UjiPcrIndex}
                    />
                    <Stack.Screen
                        name="QrcodePcr"
                        // options={{title: 'Login OTP'}}
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'QR Code Uji PCR',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={QrcodePcr}
                    />
                    <Stack.Screen
                        name="HomePcr"
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'Uji PCR di Rumah',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={HomePcr}
                    />
                    <Stack.Screen
                        name="OptionRs"
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'Uji PCR',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={OptionRs}
                    />
                    <Stack.Screen
                        name="AskIdentityWarning"
                        // options={{title: 'Login OTP'}}
                        options={{headerShown: false}}
                        component={AskIdentityWarning}
                    />
                    <Stack.Screen
                        name="CollectIdentity"
                        // options={{title: 'Login OTP'}}
                        options={{headerShown: false}}
                        component={CollectIdentity}
                    />
                    <Stack.Screen
                        name="Login"
                        // options={{title: 'Login Staff'}}
                        options={{headerShown: false}}
                        component={Login}
                    />
                    <Stack.Screen
                        name="AskIdentityAfterOTP"
                        // options={{title: 'AskIdentityAfterOTP Staff'}}
                        options={{headerShown: false}}
                        component={AskIdentityAfterOTP}
                    />
                    <Stack.Screen
                        name="InformasiMedis"
                        // options={{title: 'InformasiMedis Staff'}}
                        options={{headerShown: false}}
                        component={InformasiMedis}
                    />
                    <Stack.Screen
                        name="ScanQrResult"
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'QR Code',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={ScanQrResult}
                    />
                    <Stack.Screen
                        name="ClockOut"
                        options={{headerShown: false}}
                        component={ClockOut}
                    />
                    <Stack.Screen
                        name="ClockIn"
                        options={{headerShown: false}}
                        component={ClockIn}
                    />
                    <Stack.Screen
                        name="CovidRisk"
                        options={{headerShown: false}}
                        component={CovidRisk}
                    />
                    <Stack.Screen
                        name="Profile"
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'Profile',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={Profile}
                    />
                    <Stack.Screen
                        name="EditProfile"
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'EditProfile',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={EditProfile}
                    />
                    <Stack.Screen
                        name="Productivity"
                        options={{headerShown: false}}
                        // options={{
                        //     title: 'Productivity',
                        //     headerStyle: {
                        //         backgroundColor: '#FF5976',
                        //     },
                        //     headerTintColor: '#fff',
                        // }}
                        component={Productivity}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        // options={{title: 'Dashboard'}}
                        options={{headerShown: false}}
                        component={Dashboard}
                    />
                    <Stack.Screen
                        name="InformasiKesehatan"
                        // options={{title: 'InformasiKesehatan'}}
                        options={{headerShown: false}}
                        component={InformasiKesehatan}
                    />
                    {/* <Stack.Screen
                        name="CaptureProfile"
                        // options={{title: 'CaptureProfile'}}
                        options={{headerShown: false}}
                        component={CaptureProfile}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
