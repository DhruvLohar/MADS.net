import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAxios from '../../components/services/useAxios';

const RoomCard = ({ room }) => {

    const router = useRouter();

    const cardStyles = StyleSheet.create({
        body: {
            width: '100%',
            alignSelf: "flex-end",
            backgroundColor: COLORS.primary,
            borderRadius: 14,
            paddingVertical: 14, paddingHorizontal: 25, marginBottom: 5,
            flexDirection: "row", justifyContent: "flex-start", alignItems: "center"
        },
        image: {
            width: 60, height: 60, borderRadius: 30, backgroundColor: COLORS.primaryDark,
        }
    })

    return (
        <TouchableOpacity activeOpacity={0.8} style={cardStyles.body} onPress={() => router.push(`/messenger/${room.room_id}`)}>
            <View style={cardStyles.image}>
                <Image source={{ uri: room.logo }} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </View>
            <View style={{ marginLeft: 15 }}>
                <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 16, fontFamily: "Poppins_500Medium" }]}>{room.title}</Text>
                <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, fontSize: 12 }]}>
                    {room.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const CommunityView = () => {

    const { data, error, loaded } = useAxios("messenger/");

    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", paddingBottom: 60 }]}>
            <StatusBar style={"dark"} />

            <Text style={[TYPOGRAPHY.SubTitle, { fontFamily: "Poppins_500Medium", marginTop: 20 }]}>Trending Committees</Text>
            <Text style={[TYPOGRAPHY.Body]}>Interact and text with the people belong to the top committees from your college!</Text>

            <ScrollView style={{ marginTop: 15, width: '100%' }}>
                {loaded ? (
                    <View style={{ width: '100%' }}>
                        {data.map((room, i) => (
                            <RoomCard key={i} room={room} />
                        ))}
                    </View>
                ):(<Text>Loading ...</Text>)}
            </ScrollView>
        </SafeAreaView>
    );
}

export default CommunityView;