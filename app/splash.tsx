import { blueBrand, goldBrand } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function SplashScreen() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("isLoading:", isLoading);
            console.log("user:", user);

            if (!isLoading) {
                if (user) {
                    router.replace("../(tabs)/home");
                } else {
                    router.replace("../(auth)/login");
                }
            }
        }, 3000);  // Memberikan delay sedikit lebih lama

        return () => clearTimeout(timer);
    }, [isLoading, user]);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Image
                    source={require("@/assets/images/logo.png")}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.title1}>konsultasi </Text>
                <Text style={styles.title2}>hukum</Text>
            </View>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    title1: {
        color: blueBrand,
        fontSize: 31
    },
    title2: {
        color: goldBrand,
        fontSize: 31
    },
    image: {

    }
});
