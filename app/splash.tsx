import { blueBrand } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

const { width, height } = Dimensions.get("window");

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
          router.replace("../(auth)/lending");
        }
      }
    }, 1500); // Memberikan delay sedikit lebih lama

    return () => clearTimeout(timer);
  }, [isLoading, user]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/logo.png")} style={styles.image} resizeMode="contain" />
        <Image source={require("@/assets/images/Tagline.png")} style={styles.tagline} resizeMode="contain" />
        <Image source={require("@/assets/images/Ilustrasi.png")} style={styles.ilustrasi} resizeMode="contain" />
      </View>

      <View style={styles.textContainer}>
        <Text style={{ fontFamily: "Poppins-Light", color: blueBrand }}>dipercaya oleh :</Text>
      </View>

      <Image source={require("@/assets/images/verifikasi.png")} style={styles.verifikasi} resizeMode="contain" />

      {/* <ActivityIndicator size="large" color="#000000" style={styles.loading} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: width * 0.35,
    height: height * 0.06,
    marginTop: height * 0.07,
  },
  tagline: {
    width: width * 0.6,
    height: height * 0.12,
    marginTop: height * 0.09,
  },
  ilustrasi: {
    width: width * 0.7,
    height: height * 0.25,
    marginTop: height * 0.07,
  },
  verifikasi: {
    width: width * 0.45,
    height: height * 0.06,
    marginTop: height * 0.01,
    marginBottom: height * 0.09,
  },
  textContainer: {
    alignItems: "center",
  },
  loading: {
    marginTop: height * 0.02,
  },
});
