import { links } from "../MenuData/MenuData";

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[25%] left-0 fixed'>
      <ul className=''>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-5px] hover:rounded-md duration-500 transition-all bg-[#45514f]" +
                " " +
                link.style
              }>
              <a
                className='flex justify-between items-center w-full text-white'
                href={link.href}
                target='_blank '
                rel='noreferrer'>
                {link.child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
