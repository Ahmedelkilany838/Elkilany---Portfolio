export interface NavInterface {
  href: string;
  label: string;
  number: string;
}

export interface AboutImageInterface {
  src: string;
  width: number;
  height: number;
}

export const navItems: NavInterface[] = [
  { href: '/', label: 'Home', number: '01' },
  { href: '/about', label: 'About', number: '02' },
  { href: '/works', label: 'Works', number: '03' },
  { href: '/contact', label: 'Contact', number: '04' },
];

export const AboutImages: AboutImageInterface[] = [
  {
    src: 'https://framerusercontent.com/images/cBeHf9yDrXWC1vk1zsjx23LkAg.jpeg',
    width: 900,
    height: 1060,
  },
  {
    src: 'https://framerusercontent.com/images/k6MQlhREyen09OHgPXu2bfUHg.png',
    width: 896,
    height: 1280,
  },
  {
    src: 'https://framerusercontent.com/images/hm83XW45QkRTQ4F5ghwKXFl1esY.png',
    width: 1024,
    height: 1024,
  },
];