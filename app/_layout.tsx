import { useFonts } from "expo-font";
import * as Linking from 'expo-linking';
import { Slot, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";


export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const handleDeepLink = ({ url }: { url: string }) => {
      const { queryParams } = Linking.parse(url);
      if (url.includes('token_id=')) {
        const token = queryParams?.token_id;
        if (token) {
          router.push(`/(auth)/callback?token_id=${token}`);
        }
      }
    };

    const getInitialUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleDeepLink({ url: initialUrl });
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);
    getInitialUrl();

    return () => subscription.remove();
  }, []);


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
