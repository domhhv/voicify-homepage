import Image from 'next/image';

type VoiceCategoryChipProps = {
  label: string;
  slug: string;
};

const VoiceCategoryChip = ({ label, slug }: VoiceCategoryChipProps) => {
  return (
    <div className="bg-light-purple min-w-44 flex items-center justify-center rounded-full p-4 space-x-2 text-nowrap lg:min-w-0 mx-1">
      <Image
        src={`/${slug}-category.png`}
        alt={`${label} voice category image`}
        width={24}
        height={24}
      />
      <span className="text-purple-600 font-bold">{label}</span>
    </div>
  );
};

export default VoiceCategoryChip;
