const COLORS = {
    primary: "#0B2B26",

    primaryLight: "#DAD7CD",
    primaryDark: "#1B1B1B"
}

const LAYOUTS = {
    flexCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    LogoImage: {
        width: 180,
        height: 180,
        resizeMode: 'contain'
    }
} 

const TYPOGRAPHY = {
    Display: 42,
    Button: 18,
    Heading: {
        fontSize: 34,
        fontFamily: "Poppins_500Medium",
        color: COLORS.primaryDark
    },
    SubTitle: {
        fontSize: 24,
        fontFamily: "Poppins_400Regular",
        color: COLORS.primaryDark
    },
    Body: {
        fontSize: 15,
        fontFamily: "Poppins_400Regular",
        color: COLORS.primaryDark
    },
    BodyInfo: {
        fontSize: 15,
        fontFamily: "Poppins_500Medium",
        color: COLORS.primaryDark,

        textDecorationColor: COLORS.primaryDark,
        textDecorationStyle: "solid",
        textDecorationLine: "underline"
    }
}

const SHADOWS = {}

export {
    COLORS,
    LAYOUTS,
    TYPOGRAPHY,
    SHADOWS
};