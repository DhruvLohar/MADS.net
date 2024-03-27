import { Stack, useRouter, Redirect } from "expo-router";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

import { COLORS, TYPOGRAPHY } from "../constants/theme";
// import Button from "../components/utils/Button";
// import { HambergerMenu, User } from "iconsax-react-native";
import { useAuth } from "../context/Auth";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
        paddingHorizontal: 20
    }
});

const Home = () => {
    const router = useRouter();
    const { authState, sessionLoaded } = useAuth();

    if (!sessionLoaded) {
        return <Text>Loading ...</Text>
    }


    return !authState.authenticated ? <Redirect href={'/accounts/login'} /> : <Redirect href={'/home'} />

    // return (
    //     <>
    //         {console.log("Checking Session : ", authState, sessionLoaded)}
    //         {!authState?.authenticated ? (
    //             <Redirect href={'/accounts/login'} />
    //         ) : (
    //             <Redirect href={'/home'} />
    //         )}
    //     </>
    //     // <SafeAreaView style={styles.container} >
    //     //     <Stack.Screen options={{
    //     //         headerTitle: "Prototype Phase",
    //     //         headerLeft: () => {
    //     //             return (
    //     //                 <HambergerMenu size={22} color={COLORS.primaryDark} style={{ marginRight: 10 }} />
    //     //             );
    //     //         }
    //     //     }} />

    //     //     <Text style={{ paddingVertical: 20, textAlign: 'center', color: COLORS.primaryDark }}>
    //     //         MADS Network
    //     //     </Text>

    //     //     {/* 
    //     //     <Button title="Take Attendance" css={{ marginBottom: 20 }} onClick={() => router.push('/host')} />
    //     //     <Button title="Mark Attendance" onClick={() => router.push('/student')} /> */}
            
    //     //     <Button title="Login Page" onPress={() => router.push('/accounts/login')} />
    //     //     <Button title="Signup Page" onPress={() => router.push('/accounts/signup')} />

    //     //     <Button title="Home Page" onPress={() => router.push('/home')} />

    //     //     <Button title="Profile Page" onPress={() => router.push('/profile/3')} />

    //     //     {/* <Text style={{ paddingVertical: 20, textAlign: 'center', color: COLORS.primaryDark }}>
    //     //         Attendance System
    //     //     </Text>

    //     //     <Button title="Student View" onPress={() => router.push('/student')} />
    //     //     <Button title="Host View" onPress={() => router.push('/host')} /> */}

    //     // </SafeAreaView>
    // );
}

export default Home;