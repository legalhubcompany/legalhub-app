import { blackBrand, greenBrand, yellowBrand } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Simulasi daftar akun, kamu bisa ganti ini dengan API call
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar</Text>
      </Pressable>

      <Pressable onPress={() => router.replace("/(auth)/login")}>
        <Text style={styles.linkText}>
          Sudah punya akun? <Text style={styles.linkBold}>Login</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 32, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: yellowBrand,
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: { color: blackBrand, fontSize: 16, textAlign: "center", fontWeight: "600" },
  linkText: { textAlign: "center", color: greenBrand },
  linkBold: { color: "#34C759", fontWeight: "bold" },
});
