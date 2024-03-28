import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../constants/theme";
import { ArrowRight2 } from "iconsax-react-native";

const NoticeCard = ({ notice, viewImage }) => {

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);

        const formattedDate = date.toLocaleDateString('en-US');
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return `${formattedDate} • ${formattedTime}`;
    }

    return (
        <View style={styles.card}>
            <Text style={[TYPOGRAPHY.BodyInfo, { color: COLORS.primaryLight, opacity: .5 }]}>{formatDate(notice.created_at)}</Text>
            <Text style={styles.title}>{notice.title}</Text>
            <Text style={styles.description}>{notice.description}</Text>
            {notice.image ? (
                <Pressable style={styles.attachment} onPress={() => viewImage(notice.image)}>
                    <Text style={styles.attachmentText}>Open attachment ...</Text>
                    <ArrowRight2 size={20} color={COLORS.primaryLight} />
                </Pressable>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: COLORS.primaryDark,
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    title: {
        ...TYPOGRAPHY.Heading,
        color: COLORS.primaryLight,
        fontSize: 25,
        marginBottom: 8
    },
    description: {
        ...TYPOGRAPHY.Body,
        color: COLORS.primaryLight,
        fontSize: 14
    },
    attachment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20
    },
    attachmentText: {
        ...TYPOGRAPHY.BodyInfo,
        color: COLORS.primaryLight,
        fontSize: 14
    }
});

export default NoticeCard;
