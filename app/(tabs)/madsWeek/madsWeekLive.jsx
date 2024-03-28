import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../constants/theme";
import Button, { TextButton } from "../../../components/utils/Button";
import InfoPill from "../../../components/utils/InfoPill";

const MadsWeekLive = ({ ps }) => {
  const images = ps.images;

  const Carousel = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0].image);

    const handlePress = (image) => {
      setSelectedImage(image);
    };

    return (
      <View>
        <Image source={{ uri: selectedImage }} style={styles.topBox} />
        <View style={styles.bottomRow}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => handlePress(image.image)}
            >
              <Image source={{ uri: image.image }} style={styles.thumbnail} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const quickPills = ["React", "Frontend Engg"]

  return (
    <ScrollView>
      <Text style={TYPOGRAPHY.Heading}>MADS Week is Live!</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingBottom: 20,
          flexWrap: "wrap",
        }}
      >
        {quickPills.map((text, index) => (
          <InfoPill key={index} text={text} />
        ))}
      </View>
      <Text style={TYPOGRAPHY.Body}>
        MADS Week is now live! Participate at par with your classmates and win
        MADS Points and realife project experience!
      </Text>
      <Carousel images={images} />
      <Text style={TYPOGRAPHY.SubTitle}>{ps.ps_title}</Text>
      <Text style={TYPOGRAPHY.Body}>
        {ps.ps_desc}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextButton title="start date" />
          <Text>12th Jan, 2024</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextButton title="end date" />
          <Text>15th Jan, 2024</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextButton title="submission" />
          <Text>34</Text>
        </View>
      </View>
      <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 30 }]}>Rules</Text>
      <View>
        {ps.rules.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            • {item}
          </Text>
        ))}
      </View>

      <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 30 }]}>Rewards</Text>
      <View style={{ marginBottom: 30 }}>
        {ps.rewards.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            • {item}
          </Text>
        ))}
      </View>

      <Button title="Submit your project" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topBox: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    marginTop: 30,
    objectFit: "contain"
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingVertical: 10,
    marginBottom: 30,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  thumbnail: {
    width: 80,
    height: 50,
    resizeMode: "cover",
    borderRadius: 10,
  },
  listItem: {
    marginBottom: 3
  }
});

export default MadsWeekLive;
