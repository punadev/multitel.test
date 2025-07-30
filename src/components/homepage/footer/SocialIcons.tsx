import React from 'react';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  TiktokLogo,
} from 'phosphor-react';

interface SocialIconsProps {
  iconSize?: number;
  iconColor?: string;
  className?: string;
  gap?: string;
}

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/multitel.co.ao',
    Icon: FacebookLogo,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/multitel.ao/',
    Icon: InstagramLogo,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/multitelao/posts/?feedView=all',
    Icon: LinkedinLogo,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@multitel.angola',
    Icon: YoutubeLogo,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@multitel.angola',
    Icon: TiktokLogo,
  },
];

const SocialIcons: React.FC<SocialIconsProps> = ({
  iconSize = 100,
  iconColor = 'currentColor',
  className = '',
  gap = 'gap-1',
}) => {
  return (
    <nav
      className={`flex flex-row items-center ${gap} ${className}`}
      aria-label="Redes sociais"
    >
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="transition-all duration-300 rounded-full p-2 hover:scale-110 focus:scale-110 hover:bg-accent/10 focus:bg-accent/10 dark:hover:bg-accent/20 dark:focus:bg-accent/20 outline-none focus:ring-2 focus:ring-accent"
        >
          <Icon
            size={iconSize}
            color={iconColor}
            weight="duotone"
            className="transition-colors duration-300 text-white hover:text-accent dark:hover:text-accent"
          />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons; 