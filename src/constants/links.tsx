interface ILinks {
  name: string;
  href: string;
}

export const navLinks: ILinks[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Movies",
    href: "/movies",
  },
  {
    name: "TV Shows",
    href: "/tv-shows",
  },
  {
    name: "Top rated",
    href: "/rated",
  },
  {
    name: "My watch list",
    href: "/watch-list",
  },
];
