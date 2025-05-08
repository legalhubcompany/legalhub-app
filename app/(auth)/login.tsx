// app/(auth)/login.tsx
import { blackBrand, greenBrand, yellowBrand } from "@/constants/Colors";
import { useAuth } from "@/context/AuthContext";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useAuth();

  const handleLogin = () => {
    if (email && password) {
      login("dummy-token");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/login.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Legalhub</Text>
      <Text style={styles.subtitle}>"Tenang, sekarang biarkan ribuan Lawyer kami yang bantu masalahnya."</Text>

      <TextInput
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
      </TouchableOpacity>

      <Text style={styles.footer}>
        Belum punya akun?{" "}
        <Link href="/register" style={styles.link}>Daftar di sini</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", padding: 20
  },
  image: {
    width: 250,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
    fontStyle: 'italic'
  },
  input: {
    width: "100%",
    padding: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12
  },
  button: {
    width: "100%",
    backgroundColor: yellowBrand,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20
  },
  buttonText: {
    color: blackBrand, fontWeight: "bold"
  },
  footer: {
    fontSize: 14,
    color: "#444"
  },
  link: {
    color: greenBrand,
    fontWeight: "bold"
  }
});
