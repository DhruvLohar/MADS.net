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
const MadsWeekLive = ({ PageData }) => {
  const images = PageData.images;

  const Carousel = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

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
              onPress={() => handlePress(image)}
            >
              <Image source={{ uri: image }} style={styles.thumbnail} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const rules = PageData.rules;

  const InfoList = PageData.infoList;

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
        {InfoList.map((Info, index) => (
          <InfoPill key={index} text={Info} />
        ))}
      </View>
      <Text style={TYPOGRAPHY.Body}>
        MADS Week is now live! Participate at par with your classmates and win
        MADS Points and realife project experience!
      </Text>
      <Carousel images={images} />
      <Text style={TYPOGRAPHY.SubTitle}>Instagram Clone Web App</Text>
      <Text style={TYPOGRAPHY.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        arcu sed odio consectetur condimentum. Maecenas non ultrices massa.
        Nullam eget viverra est. Aliquam odio erat, laoreet ut ex tristique,
        interdum pretium eros.
      </Text>
      <Text style={TYPOGRAPHY.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        arcu sed odio consectetur condimentum. Maecenas non ultrices massa.
        Nullam eget viverra est. Aliquam odio erat, laoreet ut ex tristique,
        interdum pretium eros.
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
          <Text>{PageData.date.startDate}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextButton title="end date" />
          <Text>{PageData.date.endDate}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextButton title="submission" />
          <Text>{PageData.submissions}</Text>
        </View>
      </View>
      <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 30 }]}>Rules</Text>
      <View>
        {rules.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            • {item}
          </Text>
        ))}
      </View>

      <Text style={[TYPOGRAPHY.SubTitle, { marginTop: 30 }]}>Notes</Text>
      <View style={{ marginBottom: 30 }}>
        {rules.map((item, index) => (
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
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});

export default MadsWeekLive;
