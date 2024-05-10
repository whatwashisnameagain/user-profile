import { Stack } from 'expo-router';

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: true }} />
      </Stack>
  );
}
