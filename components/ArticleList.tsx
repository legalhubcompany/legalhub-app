import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const articles = [
  {
    id: "1",
    title: "Kasus Kekerasan Kembali Terjadi",
    category: "Terkini",
    image: require("@/assets/images/article1.png"),
  },
  {
    id: "2",
    title: "Perda Baru Disahkan di Jakarta",
    category: "Administrasi",
    image: require("@/assets/images/article2.png"),
  },
];

export default function ArticleList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Artikel Hukum</Text>
      <View style={styles.tabs}>
        {["Terkini", "Administrasi", "Bisnis", "Etika", "Ekonomi"].map((cat) => (
          <Text key={cat} style={styles.tab}>
            {cat}
          </Text>
        ))}
      </View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 12 },
  tabs: {
    flexDirection: "row",
    marginBottom: 12,
    flexWrap: "wrap",
    gap: 8,
  },
  tab: {
    fontSize: 12,
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 8,
  },
  card: {
    width: 200,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 6,
  },
  category: {
    fontSize: 11,
    color: "#888",
  },
  titleText: {
    fontSize: 13,
    fontWeight: "500",
  },
});
