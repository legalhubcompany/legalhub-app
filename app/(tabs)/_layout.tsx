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

  const renderTabBarIcon = useCallback((props: {
    color: string;
    size: number;
    name: 'home' | 'transaction' | 'profile' | 'notification';
  }) => {
    const { color, size, name } = props;
    
    switch (name) {
      case 'home':
        return <MaterialCommunityIcons name="home-variant-outline" size={size} color={color} />;
      case 'transaction':
        return <Ionicons name="card-outline" size={size} color={color} />;
      case 'notification':
        return <Ionicons name="notifications-outline" size={size} color={color} />;
      case 'profile':
        return <Ionicons name="person-outline" size={size} color={color} />;
      default:
        return null;
    }
  }, []);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: 'home' }), }} />
      <Tabs.Screen name="transaction" options={{ title: "Transaction", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: 'transaction' }) }} />
      <Tabs.Screen name="notification" options={{ title: "Notification", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: 'notification' }) }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color, size }) => renderTabBarIcon({ color, size, name: 'profile' }) }} />
    </Tabs>
  );
}
