import { blueBrand } from "@/constants/Colors";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const advokatOnline = [
  {
    id: "1",
    name: "Tatang Koeswara, S.H., M.H.",
    city: "Jakarta",
    experience: "6 tahun",
    rating: "4.9 (150 review)",
    verified: "Verified by Peradi",
    price: "Rp.50.000",
    image: require("@/assets/images/lawyer1.png"),
  },
  {
    id: "2",
    name: "Bambang S.H.",
    city: "Bandung",
    experience: "8 tahun",
    rating: "4.8 (100 review)",
    verified: "Verified by Peradi",
    price: "Rp.75.000",
    image: require("@/assets/images/lawyer2.png"),
  },
];

export default function AdvokatSlider() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Advokat Online</Text>
      <Text style={styles.desc}>Pilih advokat yang online untuk memperoleh layanan konsultasi secara langsung</Text>
      <FlatList
        data={advokatOnline}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.content}>
              <View style={styles.leftSubContent}>
                <View style={styles.circle}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Mulai Konsultasi</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rightSubContent}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.items}>
                  <View style={{ marginBottom: 10 }}>
                    <View style={styles.detail}>
                      <Image source={require("@/assets/icons/cityIcon.png")} style={styles.icons} />
                      <Text style={styles.city}>{item.city}</Text>
                    </View>
                    <View style={styles.detail}>
                      <Image source={require("@/assets/icons/bag.png")} style={styles.icons} />
                      <Text style={styles.exp}>{item.experience}</Text>
                    </View>
                  </View>
                  <View>
                    <View style={styles.detail}>
                      <Image source={require("@/assets/icons/verified.png")} style={styles.icons} />
                      <Text style={styles.verified}>{item.verified}</Text>
                    </View>
                    <View style={styles.detail}>
                      <Image source={require("@/assets/icons/like.png")} style={styles.icons} />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.detailPrice}>
                  <Text style={styles.mulai}>Mulai dari</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  desc: { fontSize: 13, color: "#666", marginBottom: 12 },
  card: {
    flex: 1,
    width: 262,
    marginRight: 16,
    padding: 12,
    borderRadius: 15,
    borderColor: "#C7C7C7",
    borderWidth: 0.5,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  leftSubContent: {
    flexDirection: "column",
  },
  circle: {
    width: 69,
    height: 69,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 10,
  },
  image: { width: 53, height: 62, marginTop: 10 },
  rightSubContent: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  items: {
    flex: 1,
    flexDirection: "row",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 5,
  },
  icons: {
    width: 11,
    height: 13,
  },
  name: { fontSize: 12, fontFamily: "Poppins-SemiBold", marginTop: 8, marginBottom: 5 },
  city: { fontSize: 9, fontFamily: "Poppins-Regular", color: "#3A3A3A", marginLeft: 3 },
  verified: { fontSize: 9, fontFamily: "Poppins-Regular", color: "#3A3A3A", marginLeft: 3 },
  exp: { fontSize: 9, fontFamily: "Poppins-Regular", color: "#3A3A3A", marginLeft: 3 },
  rating: { fontSize: 9, fontFamily: "Poppins-Regular", color: "#3A3A3A", marginLeft: 3 },
  price: { fontSize: 13, fontFamily: "Poppins-Bold", color: blueBrand },
  mulai: { fontSize: 9, fontFamily: "Poppins-Regular", color: "#757575" },
  button: {
    backgroundColor: "#004AAD",
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 7, fontFamily: "Poppins-Regular", fontWeight: "bold" },
  detailPrice: {},
});
