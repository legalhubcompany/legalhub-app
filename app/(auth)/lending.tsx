// app/(auth)/landing.tsx
import { blueBrand, goldBrand } from "@/constants/Colors";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Landing() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image source={require("@/assets/images/logo2.png")} style={styles.logo} resizeMode="contain" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.welcomeText}>Selamat datang,</Text>
            <Text style={styles.brandText}>Sobat Ruang Hukum</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>login / register</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>konsultasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>lapor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>informasi</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel Placeholder */}
      <View style={styles.carousel}>
        <View style={styles.slide}></View>
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Section Advokat Online */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Advokat Online</Text>
        <Text style={styles.sectionDesc}>Pilih advokat yang online untuk memperoleh layanan konsultasi secara langsung</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: width * 0.08,
    height: width * 0.08,
  },
  welcomeText: {
    fontSize: width * 0.03,
    fontFamily: "Poppins-Regular",
    color: goldBrand,
    marginBottom: -2,
  },
  brandText: {
    fontSize: width * 0.035,
    fontFamily: "Poppins-SemiBold",
    color: blueBrand,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: blueBrand,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  loginText: {
    fontSize: width * 0.03,
    fontFamily: "Poppins-Regular",
    color: blueBrand,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    padding: 4,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  activeTab: {
    backgroundColor: blueBrand,
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  inactiveTab: {
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  activeTabText: {
    color: "#fff",
    fontFamily: "Poppins-SemiBold",
    fontSize: width * 0.03,
  },
  inactiveTabText: {
    color: "#000",
    fontFamily: "Poppins-Regular",
    fontSize: width * 0.03,
  },
  carousel: {
    alignItems: "center",
    marginBottom: 24,
  },
  slide: {
    width: "100%",
    height: height * 0.22,
    backgroundColor: "#000",
    borderRadius: 12,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: width * 0.032,
    fontFamily: "Poppins-Regular",
    color: "#333",
  },
});
