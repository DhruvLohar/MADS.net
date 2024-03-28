import axios from "axios";

import React, { memo, useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import Tab from '../../components/utils/Tab';
import { Add, ArrowRight2, DocumentDownload } from 'iconsax-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useAxios from "../../components/services/useAxios";
import NoticeCard from "../../components/utils/NoticeCard";

// import * as FileSystem from 'expo-file-system';
// import * as MediaLibrary from 'expo-media-library';

const CollegeNotices = memo(() => {

    const { data, error, loaded } = useAxios('notices/');

    const [selectedImage, setSelectedImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    }

    const closeModal = () => {
        setSelectedImage(null);
        setModalVisible(false);
    }

    const handleDownload = async () => {
        // try {
        //     const { status } = await MediaLibrary.requestPermissionsAsync();
        //     if (status !== 'granted') {
        //         console.error('Media library permission not granted.');
        //         return;
        //     }

        //     const fileUri = FileSystem.cacheDirectory + 'image.jpg';
        //     await FileSystem.downloadAsync(selectedImage, fileUri);

        //     const asset = await MediaLibrary.createAssetAsync(fileUri);
        //     await MediaLibrary.saveToLibraryAsync(asset);
        //     console.log('Image saved to library.');
        // } catch (error) {
        //     console.error('Failed to download and save image:', error);
        // }
    }

    return (
        <View style={{ width: "100%" }}>
            {loaded ? (
                <>
                    {data.map(notice => (
                        <NoticeCard key={notice.id} notice={notice} viewImage={openModal} />
                    ))}

                    <Modal
                        visible={modalVisible}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={closeModal}
                    >
                        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)' }} onPress={closeModal}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={{ uri: selectedImage }} style={{ width: "90%", height: "85%", borderRadius: 30, objectFit: "contain" }} />

                                <TouchableOpacity style={{ position: 'absolute', top: 20, right: 80 }} onPress={handleDownload}>
                                    <DocumentDownload color={"white"} size={32} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }} onPress={closeModal}>
                                    <Add color={"white"} size={32} rotation={45} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </>
            ) : (<Text>Loading ...</Text>)}
        </View>
    )
});

const ClassNotices = memo(() => {
    return (
        <View style={{ width: '100%' }}>
            <Text>Class room updates</Text>
        </View>
    );
})

const CollgeNoticeView = () => {
    const tabs = ["College", "Classroom"];
    const [active, setActive] = useState(tabs[0]);

    return (
        <SafeAreaView style={[LAYOUTS.flexCenter, LAYOUTS.screenView, { backgroundColor: COLORS.primaryLight, position: "relative", paddingBottom: 60 }]}>
            <StatusBar style={"dark"} />

            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: 20, marginTop: 10 }}>
                {tabs.map((item, idx) => (
                    <Tab key={idx} title={item} isActive={active === item} switchTab={() => setActive(item)} />
                ))}
            </View>
            <ScrollView>
                {active === tabs[0]
                    ? <CollegeNotices />
                    : <ClassNotices />
                }
            </ScrollView>
        </SafeAreaView>
    );
}

export default CollgeNoticeView;