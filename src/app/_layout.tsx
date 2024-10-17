import '../global.css';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

import { Slot } from 'expo-router';
import { AuthProvider } from './context/AuthContext';

export default function Layout() {
  return (
    <GluestackUIProvider mode="light">
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
