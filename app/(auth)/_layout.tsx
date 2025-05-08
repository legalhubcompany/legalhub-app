import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function AuthLayout() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/(tabs)/home");
    }
  }, [isLoading, user]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
