import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { ROTATING_WORDS } from "../data/content";
import { useTheme } from "../theme/ThemeContext";

export default function RotatingHeadline() {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      opacity.value = withTiming(0, { duration: 220, easing: Easing.out(Easing.quad) });
      translateY.value = withTiming(-8, { duration: 220, easing: Easing.out(Easing.quad) }, (finished) => {
        if (finished) {
          runOnJS(setIndex)((i) => (i + 1) % ROTATING_WORDS.length);
          translateY.value = 8;
          opacity.value = withTiming(1, { duration: 260, easing: Easing.out(Easing.quad) });
          translateY.value = withTiming(0, { duration: 260, easing: Easing.out(Easing.quad) });
        }
      });
    }, 2200);
    return () => clearInterval(interval);
  }, [opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.row} testID="rotating-headline">
      <Text style={[styles.static, { color: colors.textPrimary, fontFamily: "Orbitron_900Black" }]}>
        REBUILDING THE{" "}
      </Text>
      <View style={styles.wordWrap}>
        <Animated.Text
          style={[
            styles.word,
            animatedStyle,
            { color: colors.primary, fontFamily: "Orbitron_900Black" },
          ]}
        >
          {ROTATING_WORDS[index]}
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
  },
  static: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 1.5,
  },
  wordWrap: {
    minHeight: 34,
    justifyContent: "flex-end",
  },
  word: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 1.5,
  },
});
