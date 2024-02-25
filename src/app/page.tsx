import Image from 'next/image';

import {
  AppBanner,
  VoiceCategoryChipsList,
  VoiceModelCard,
} from '../components';

const COMMUNITY_VOICE_MODELS = [
  {
    id: 1,
    name: 'Elvis',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/MBw062D/elvis.png',
  },
  {
    id: 2,
    name: 'Minecraft Villager',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/RCj2vtR/minecraft.png',
  },
  {
    id: 3,
    name: 'Anime',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/D7NmdG7/anime.png',
  },
  {
    id: 4,
    name: 'Patrick',
    usesCount: 324,
    likesCount: 1056,
    thumbnailUrl: 'https://i.ibb.co/tZt39Bs/patrick.png',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-3">
      <AppBanner />
      <VoiceCategoryChipsList />
      <section className="w-full">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/heart.svg"
            alt="Heart icon"
            width={72}
            height={72}
            className="max-lg:w-40px max-lg:h-40px max-md:w-24px max-md:h-24px"
          />
          <p className="category-title">
            Community{' '}
            <span className="category-count">
              {COMMUNITY_VOICE_MODELS.length}
            </span>
          </p>
        </div>
        <div className="w-full flex gap-8 flex-wrap">
          {COMMUNITY_VOICE_MODELS.map((model) => {
            return (
              <VoiceModelCard
                key={model.id}
                name={model.name}
                usesCount={model.usesCount}
                likesCount={model.likesCount}
                thumbnailUrl={model.thumbnailUrl}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
