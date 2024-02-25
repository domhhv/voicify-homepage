import Image from 'next/image';

import { InstagramIcon, TikTokIcon, YouTubeIcon } from '../icons';

const AppBanner = () => {
  return (
    <section className="relative">
      <Image
        src="/hero-banner.png"
        alt="Hero banner image"
        width={1920}
        height={1080}
      />
      <div className="banner-text-container">
        <p className="hero-banner-heading">
          Create song covers using any voice with AI
        </p>
        <p className="hero-banner-subheading">
          The #1 platform for making high quality AI covers in seconds!
        </p>
      </div>
      <div className="flex flex-col p-8 xl:p-6 lg:p-4 space-y-2 absolute rounded-full bg-white banner-social-views-chip">
        <div className="flex space-x-4 items-center">
          <TikTokIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <p className="text-gray-600 hero-banner-chip-text">
          Voicify generated 100M+ views
        </p>
      </div>
    </section>
  );
};

export default AppBanner;
