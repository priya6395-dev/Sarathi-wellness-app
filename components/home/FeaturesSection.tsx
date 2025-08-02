import React from 'react';
import Link from 'next/link';
import FeatureCard from './FeatureCard';
import { FaRegLightbulb, FaBookOpen, FaUserFriends, FaLeaf, FaBrain, FaHeart } from 'react-icons/fa';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string; // Must be string (URL path)
}

const features: Feature[] = [
  {
    title: 'Daily Motivation',
    description: 'Geeta ji ke shlokas ke saath har din motivation paye.',
    icon: <FaRegLightbulb />,
    linkTo: '/daily-motivation',
  },
  {
    title: 'Learn Gita',
    description: 'Bhagavad Gita ke important chapters aur teachings.',
    icon: <FaBookOpen />,
    linkTo: '/learn-gita',
  },
  {
    title: 'Community',
    description: 'Connect karo dusre seekers ke saath aur share karo apne thoughts.',
    icon: <FaUserFriends />,
    linkTo: '/community',
  },
  {
    title: 'Nature & Wellness',
    description: 'Mindfulness aur nature ke sath balance life.',
    icon: <FaLeaf />,
    linkTo: '/nature-wellness',
  },
  {
    title: 'Mind & Meditation',
    description: 'Meditation techniques for a calm and focused mind.',
    icon: <FaBrain />,
    linkTo: '/mind-meditation',
  },
  {
    title: 'Heart & Soul',
    description: 'Spiritual growth aur emotional healing ke liye guidance.',
    icon: <FaHeart />,
    linkTo: '/heart-soul',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 flex flex-wrap justify-center gap-8">
      {features.map(({ title, description, icon, linkTo }) => (
        <Link key={title} href={linkTo} passHref>
          <a>
            <FeatureCard title={title} description={description} icon={icon} />
          </a>
        </Link>
      ))}
    </section>
  );
};

export default FeaturesSection;
