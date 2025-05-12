import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { AuthProvider } from "../context/AuthContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
  });

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
