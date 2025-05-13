import React from "react";
import { Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const data = [require("@/assets/carousel/1.png"), require("@/assets/carousel/2.png"), require("@/assets/carousel/3.png")];

export default function CarouselComponent() {
  return (
    <Carousel
      loop
      autoPlay
      width={width - 32}
      height={180}
      data={data}
      scrollAnimationDuration={1000}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{
            width: width - 32,
            height: 180,
            borderRadius: 12,
          }}
          resizeMode="cover"
        />
      )}
    />
  );
}
