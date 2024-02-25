import clsx from 'clsx';

import VoiceCategoryChip from './VoiceCategoryChip';

const VOICE_CATEGORIES = [
  {
    id: 1,
    slug: 'music',
    label: 'Music',
  },
  {
    id: 2,
    slug: 'cartoon',
    label: 'Cartoon',
  },
  {
    id: 3,
    slug: 'anime',
    label: 'Anime',
  },
  {
    id: 4,
    slug: 'gaming',
    label: 'Gaming',
  },
  {
    id: 5,
    slug: 'german',
    label: 'German',
  },
  {
    id: 6,
    slug: 'korean',
    label: 'Korean',
  },
  {
    id: 7,
    slug: 'french',
    label: 'French',
  },
  {
    id: 8,
    slug: 'public-figure',
    label: 'Public Figure',
  },
];

const VoiceCategoryChipsList = () => {
  const chipsContainerClassName = clsx(
    'flex',
    'flex-wrap',
    'py-24',
    'space-x-4',
    'space-y-4',
    'justify-center',
    'items-baseline'
  );
  return (
    <div className={chipsContainerClassName}>
      {VOICE_CATEGORIES.map((category) => {
        return (
          <VoiceCategoryChip
            key={category.id}
            label={category.label}
            slug={category.slug}
          />
        );
      })}
    </div>
  );
};

// const VoiceCategoryChipsList = () => {
//   return (
//     <div className="flex flex-col space-y-4 mx-auto py-24 lg:flex-row lg:space-y-0 lg:space-x-4">
//       <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 flex-1">
//         <div className="flex flex-col space-y-4 flex-1 xl:flex-row xl:space-y-0 xl:space-x-4">
//           {VOICE_CATEGORIES.slice(0, 2).map((category) => (
//             <VoiceCategoryChip
//               key={category.id}
//               label={category.label}
//               slug={category.slug}
//             />
//           ))}
//         </div>
//         <div className="flex flex-col space-y-4 flex-1 xl:flex-row xl:space-y-0 xl:space-x-4">
//           {VOICE_CATEGORIES.slice(2, 4).map((category) => (
//             <VoiceCategoryChip
//               key={category.id}
//               label={category.label}
//               slug={category.slug}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 flex-1">
//         <div className="flex flex-col space-y-4 flex-1 xl:flex-row xl:space-y-0 xl:space-x-4">
//           {VOICE_CATEGORIES.slice(4, 6).map((category) => (
//             <VoiceCategoryChip
//               key={category.id}
//               label={category.label}
//               slug={category.slug}
//             />
//           ))}
//         </div>
//         <div className="flex flex-col space-y-4 flex-1 xl:flex-row xl:space-y-0 xl:space-x-4">
//           {VOICE_CATEGORIES.slice(6, 8).map((category) => (
//             <VoiceCategoryChip
//               key={category.id}
//               label={category.label}
//               slug={category.slug}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default VoiceCategoryChipsList;
