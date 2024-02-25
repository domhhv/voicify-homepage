import Image from 'next/image';

type VoiceModelCardProps = {
  name: string;
  usesCount: number;
  likesCount: number;
  thumbnailUrl: string;
};

const VoiceModelCard = ({
  name,
  usesCount,
  likesCount,
  thumbnailUrl,
}: VoiceModelCardProps) => {
  return (
    <div className="relative w-full flex flex-col flex-1 voice-model-card">
      <button className="absolute top-12px right-12px">
        <Image
          src="/white-heart-outlined.svg"
          alt="Like icon"
          width={24}
          height={24}
        />
      </button>
      <div
        style={{
          backgroundImage: `url("${thumbnailUrl}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: 240,
          borderRadius: 8,
          backgroundPosition: 'center',
        }}
      />
      <div className="p-4 space-y-2">
        <div className="flex gap-2 items-center">
          <Image src="/head.svg" alt="Head icon" width={24} height={24} />
          <h3 className="voice-model-name">{name}</h3>
        </div>
        <p className="voice-model-details">
          Uses: {usesCount} · Likes: {likesCount}
        </p>
      </div>
    </div>
  );
};

export default VoiceModelCard;
