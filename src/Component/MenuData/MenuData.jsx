import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const MenuData = [
  {
    id: 1,
    link: "home",
    href: "home",
  },
  {
    id: 2,
    link: "about",
    href: "about",
  },
  {
    id: 3,
    link: "portfolio",
    href: "portfolio",
  },
  {
    id: 4,
    link: "experience",
    href: "experience",
  },
  {
    id: 5,
    link: "contact",
    href: "contact",
  },
];

export const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <CiLinkedin />
      </>
    ),
    href: "https://www.linkedin.com/in/muhammad-mamun-6444b62aa/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub />
      </>
    ),
    href: "https://github.com/MdMamun8",
    style: "rounded-br-md",
  },
];
