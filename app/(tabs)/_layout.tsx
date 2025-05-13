import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useCallback, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function TabsLayout() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/(auth)/login");
    }
  }, [isLoading, user]);

  if (isLoading) return null;

  const renderTabBarIcon = useCallback((props: { color: string; size: number; name: "Home" | "Riwayat" | "Artikel" | "Akun" }) => {
    const { color, size, name } = props;

    switch (name) {
      case "Home":
        return <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />;
      case "Riwayat":
        return <Ionicons name="card-outline" size={size} color={color} />;
      case "Artikel":
        return <Ionicons name="notifications-outline" size={size} color={color} />;
      case "Akun":
        return <Ionicons name="person-outline" size={size} color={color} />;
      default:
        return null;
    }
  }, []);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" options={{ title: "Home", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: "Home" }) }} />
      <Tabs.Screen name="Riwayat" options={{ title: "Riwayat", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: "Riwayat" }) }} />
      <Tabs.Screen name="Artikel" options={{ title: "Artikel", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: "Artikel" }) }} />
      <Tabs.Screen name="Akun" options={{ title: "Akun", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: "Akun" }) }} />
    </Tabs>
  );
}
