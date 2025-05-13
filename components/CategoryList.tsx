import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const categories = [
  { id: "1", name: "Perdata", icon: require("@/assets/icons/perdata.png") },
  { id: "2", name: "Pidana", icon: require("@/assets/icons/pidana.png") },
  { id: "3", name: "Pajak Perusahaan", icon: require("@/assets/icons/perusahaan.png") },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Kategori</Text>
      <View style={styles.cardContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 16 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 12 },
  cardContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    width: 100,
    backgroundColor: "#fff",
    padding: 12,
    marginRight: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: { width: 40, height: 40, marginBottom: 8 },
  name: { fontSize: 12, textAlign: "center" },
});
