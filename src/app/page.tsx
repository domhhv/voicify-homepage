import { AppBanner, VoiceCategoryChipsList } from '../components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-3">
      <AppBanner />
      <VoiceCategoryChipsList />
    </main>
  );
}
