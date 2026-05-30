import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Sun, Moon } from "lucide-react-native";
import { useTheme } from "../theme/ThemeContext";

export default function Header() {
  const { colors, mode, toggle } = useTheme();

  return (
    <View
      testID="app-header"
      style={[
        styles.container,
        { backgroundColor: colors.surface, borderBottomColor: colors.border },
      ]}
    >
      <View style={styles.left}>
        <View style={[styles.dot, { backgroundColor: colors.primary }]} />
        <Text
          style={[
            styles.brand,
            { color: colors.textPrimary, fontFamily: "Orbitron_800ExtraBold" },
          ]}
        >
          ADMS
        </Text>
        <View style={[styles.divider, { backgroundColor: colors.border }]} />
        <Text
          style={[
            styles.tagline,
            { color: colors.textSecondary, fontFamily: "JetBrainsMono_500Medium" },
          ]}
        >
          CLEARVIEW
        </Text>
      </View>

      <TouchableOpacity
        testID="theme-toggle-button"
        accessibilityLabel="Toggle theme"
        onPress={toggle}
        activeOpacity={0.7}
        style={[
          styles.toggle,
          { borderColor: colors.border, backgroundColor: colors.surfaceAlt },
        ]}
      >
        {mode === "dark" ? (
          <Sun size={16} color={colors.primary} strokeWidth={2.25} />
        ) : (
          <Moon size={16} color={colors.textPrimary} strokeWidth={2.25} />
        )}
        <Text
          style={[
            styles.toggleLabel,
            { color: colors.textPrimary, fontFamily: "JetBrainsMono_700Bold" },
          ]}
        >
          {mode === "dark" ? "LIGHT" : "DARK"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 0,
  },
  brand: {
    fontSize: 18,
    letterSpacing: 3,
  },
  divider: {
    width: 1,
    height: 16,
  },
  tagline: {
    fontSize: 10,
    letterSpacing: 1.8,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 2,
  },
  toggleLabel: {
    fontSize: 10,
    letterSpacing: 1.5,
  },
});
