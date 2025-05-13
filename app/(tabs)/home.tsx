import AdvokatSlider from "@/components/AdvokatSlider";
import ArticleList from "@/components/ArticleList";
import CarouselComponent from "@/components/CarouselComponent";
import CategoryList from "@/components/CategoryList";
import { blueBrand, goldBrand } from "@/constants/Colors";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const [activeTab, setActiveTab] = useState("konsultasi");

  return (
    <ScrollView style={styles.container}>
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
        {["konsultasi", "lapor", "informasi"].map((tab) => (
          <TouchableOpacity key={tab} style={activeTab === tab ? styles.activeTab : styles.inactiveTab} onPress={() => setActiveTab(tab)}>
            <Text style={activeTab === tab ? styles.activeTabText : styles.inactiveTabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Header, Tabs, Carousel */}
      <CarouselComponent />

      {/* Advokat Online */}
      <AdvokatSlider />

      {/* Kategori */}
      <CategoryList />

      {/* Artikel */}
      <ArticleList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
    width: 32,
    height: 32,
  },
  welcomeText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: goldBrand,
  },
  brandText: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: blueBrand,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  loginText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
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
  },
  inactiveTabText: {
    color: "#000",
    fontFamily: "Poppins-Regular",
  },
});
