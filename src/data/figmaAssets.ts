import type { TimerAdjustDirection } from '../types';

export const FIGMA_IMAGES = {
  logo: '/assets/questdone/logo.png',
  profileAvatar: '/assets/questdone/avatar-alt.svg',
  stopwatch: '/assets/questdone/stopwatch.png',
  rewards: {
    witchHat: '/assets/questdone/reward-witch-hat.png',
    wizardHat: '/assets/questdone/reward-wizard-hat.png',
    coin: '/assets/questdone/reward-coin.png',
    potion: '/assets/questdone/reward-potion.png',
    suitcase: '/assets/questdone/reward-suitcase.png',
    fireWand: '/assets/questdone/reward-fire-wand.png',
  },
  badges: {
    flag: '/assets/questdone/badge-flag.png',
    medal: '/assets/questdone/badge-medal.png',
    star: '/assets/questdone/badge-star.png',
    swords: '/assets/questdone/badge-swords.png',
    shield: '/assets/questdone/badge-shield.png',
    trophy: '/assets/questdone/badge-trophy.png',
  },
  settings: {
    colorWheel: '/assets/questdone/settings-color-wheel.png',
    reminderBell: '/assets/questdone/settings-reminder-bell.png',
  },
};

export const PROFILE_USER = {
  name: 'Ethan',
  title: 'Welcome, Ethan!',
};

export const PROFILE_STATS = [
  { label: 'Days Without Missing a Task', value: '6' },
  { label: 'Tasks This Week', value: '21' },
  { label: 'Experience This Week', value: '2300' },
  { label: 'Weekly Experience Boost', value: '2X' },
];

export interface TimerAdjustment {
  id: string;
  title: string;
  display: string;
  seconds: number;
  direction: TimerAdjustDirection;
}

export const TIMER_ADJUSTMENTS: TimerAdjustment[] = [
  { id: 'add-5s', title: 'Add Seconds', display: '+5', seconds: 5, direction: 'add' },
  { id: 'add-30s', title: 'Add Seconds', display: '+30', seconds: 30, direction: 'add' },
  { id: 'add-5m', title: 'Add Minutes', display: '+5', seconds: 5 * 60, direction: 'add' },
  { id: 'add-30m', title: 'Add Minutes', display: '+30', seconds: 30 * 60, direction: 'add' },
  { id: 'remove-5s', title: 'Remove Seconds', display: '-5', seconds: 5, direction: 'remove' },
  { id: 'remove-10s', title: 'Remove Seconds', display: '-10', seconds: 10, direction: 'remove' },
  { id: 'remove-1m', title: 'Remove Minutes', display: '-1', seconds: 60, direction: 'remove' },
  { id: 'remove-5m', title: 'Remove Minutes', display: '-5', seconds: 5 * 60, direction: 'remove' },
];

export const REWARD_ICON_SETS = {
  rewards: [
    { id: 'witch-hat', alt: 'Witch hat reward', src: FIGMA_IMAGES.rewards.witchHat },
    { id: 'coin', alt: 'Coin reward', src: FIGMA_IMAGES.rewards.coin },
    { id: 'wizard-hat', alt: 'Wizard hat reward', src: FIGMA_IMAGES.rewards.wizardHat },
    { id: 'potion', alt: 'Potion reward', src: FIGMA_IMAGES.rewards.potion },
    { id: 'suitcase', alt: 'Suitcase reward', src: FIGMA_IMAGES.rewards.suitcase },
    { id: 'fire-wand', alt: 'Fire wand reward', src: FIGMA_IMAGES.rewards.fireWand },
  ],
  badges: [
    { id: 'flag', alt: 'Flag badge', src: FIGMA_IMAGES.badges.flag },
    { id: 'medal', alt: 'Medal badge', src: FIGMA_IMAGES.badges.medal },
    { id: 'star', alt: 'Star badge', src: FIGMA_IMAGES.badges.star },
    { id: 'swords', alt: 'Swords badge', src: FIGMA_IMAGES.badges.swords },
    { id: 'shield', alt: 'Shield badge', src: FIGMA_IMAGES.badges.shield },
    { id: 'trophy', alt: 'Trophy badge', src: FIGMA_IMAGES.badges.trophy },
  ],
};

export const TASKS = {
  low: ['Solve 1 + 1', 'Prepare Clothes', 'Figma Tutorial'],
  medium: ['Create Low-Fidelity Prototype', 'Begin Figma Report', 'Refine Interaction Flow, Begin Optimization'],
  high: [
    'Develop High Fidelity Prototype, Begin Build',
    'Implement Core Feature Functionality, Begin Integration',
    'Conduct Usability Testing Session, Begin Analysis',
    'Finalize UI Asset Pack, Begin Deployment Prep',
  ],
};

export const THEME_COLORS = ['Orange', 'Blue', 'Red', 'Green'];
export const LANGUAGES = ['English', 'French', 'Spanish'];

