// app/(auth)/login.tsx
import { greenBrand, yellowBrand } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WA_BOT_NUMBER = "6287780081053"; // ganti dengan nomor bot kamu

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      login("dummy-token");
    }
  };

  const handleWhatsAppLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://ec2-13-229-209-95.ap-southeast-1.compute.amazonaws.com:3000/api/auth/v2/login/request");
      const token = res.data?.data?.token_id;

      if (!token) throw new Error("Token kosong");

      const message =
        `✅ Cukup tekan *Kirim* untuk login. Kode ini berlaku 5 menit.\n\n` +
        `*JANGAN UBAH PESAN INI*\n\n` +
        `Ini adalah kode login untuk aplikasi Legalhub.\n\n` +
        `CODE: ${token}`;

      const url = `https://wa.me/${WA_BOT_NUMBER}?text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    } catch (err) {
      Alert.alert("Gagal", "Gagal membuat token login. Coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/login.png")} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Legalhub</Text>
      <Text style={styles.subtitle}>
        "Tenang, sekarang biarkan ribuan Lawyer kami yang bantu masalahnya."
      </Text>

      {/* <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={[styles.button, { backgroundColor: greenBrand }]} onPress={handleWhatsAppLogin}>
        <Text style={styles.buttonText}>Login via WhatsApp</Text>
      </TouchableOpacity>

      {/* <Text style={styles.footer}>
        Belum punya akun?{" "}
        <Link href="/register" style={styles.link}>
          Daftar di sini
        </Link>
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  input: {
    width: "100%",
    padding: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    width: "100%",
    backgroundColor: yellowBrand,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: "bold",
  },
  footer: {
    fontSize: 14,
    color: "#444",
  },
  link: {
    color: greenBrand,
    fontWeight: "bold",
  },
});
