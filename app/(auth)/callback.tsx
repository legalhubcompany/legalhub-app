import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Callback() {
  const { token_id } = useLocalSearchParams();
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    if (!token_id) return;

    const validateToken = async () => {
      try {
        const res = await axios.post(
          "http://ec2-13-229-209-95.ap-southeast-1.compute.amazonaws.com:3000/api/auth/v2/login/validate",
          { token_id: token_id }
        );

        const { access_token, user, is_new_user } = res.data.data;

        login(access_token);

        if (is_new_user) {
          router.replace("/complete-profile");
        } else {
          router.replace("/(tabs)/Home");
        }
      } catch (err) {
        console.log(err)
        router.replace("/(auth)/login");
      }
    };

    validateToken();
  }, [token_id]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
