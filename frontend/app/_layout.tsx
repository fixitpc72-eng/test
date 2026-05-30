import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useIconFonts } from "@/src/hooks/use-icon-fonts";
import { ThemeProvider } from "@/src/theme/ThemeContext";
import { useFonts as useOrbitron, Orbitron_500Medium, Orbitron_700Bold, Orbitron_800ExtraBold, Orbitron_900Black } from "@expo-google-fonts/orbitron";
import { useFonts as useMono, JetBrainsMono_400Regular, JetBrainsMono_500Medium, JetBrainsMono_700Bold } from "@expo-google-fonts/jetbrains-mono";
import { useFonts as useJakarta, PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from "@expo-google-fonts/plus-jakarta-sans";

// Keep the native splash visible from cold start until icon fonts register.
// Required because @expo/vector-icons' componentDidMount fallback fires
// Font.loadAsync against a broken vendor path if any <Icon> mounts before
// the family is registered — which throws on Android Expo Go.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [iconsLoaded, iconsError] = useIconFonts();
  const [orbitronLoaded] = useOrbitron({ Orbitron_500Medium, Orbitron_700Bold, Orbitron_800ExtraBold, Orbitron_900Black });
  const [monoLoaded] = useMono({ JetBrainsMono_400Regular, JetBrainsMono_500Medium, JetBrainsMono_700Bold });
  const [jakartaLoaded] = useJakarta({ PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold });

  const allLoaded = iconsLoaded && orbitronLoaded && monoLoaded && jakartaLoaded;

  useEffect(() => {
    if (allLoaded || iconsError) {
      SplashScreen.hideAsync();
    }
  }, [allLoaded, iconsError]);

  // If the CDN is unreachable we fall through on error rather than wedging
  // the app — icons will tofu, but the app still boots.
  if (!allLoaded && !iconsError) return null;

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
