'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VoicifyLink } from './links';

type AppLinkProps = {
  activeColorLink: string;
  inactiveColorLink: string;
  link: VoicifyLink;
};

const AppLink = ({
  link,
  activeColorLink,
  inactiveColorLink,
}: AppLinkProps) => {
  const pathname = usePathname();

  const isCurrent = pathname === link.to;
  const className = `flex items-center space-x-2 font-bold ${isCurrent ? '' : 'inactive-link'}`;
  const Icon = link.icon;

  return (
    <div key={crypto.randomUUID()} className={className}>
      <Icon color={isCurrent ? activeColorLink : inactiveColorLink} />
      <Link href={link.to}>{link.title}</Link>
    </div>
  );
};

export default AppLink;
