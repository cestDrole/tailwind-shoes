import { close } from "../assets/icons";
import { navLinks } from "../constants";

const MobileNavBar = ({ status, setToggle }) => {
  return (
    <div
      className={`z-50 h-[100vh] w-full bg-white fixed transition-all duration-500 ease-in-out ${
        status ? "right-0" : "-right-[100%]"
      }`}
    >
      <div className='flex justify-end items-center mr-3 mt-3'>
        <img
          src={close}
          className={`h-12 w-12 cursor-pointer`}
          onClick={() => setToggle(!status)}
        />
      </div>

      <ul className='flex-1 flex justify-center items-center flex-col h-[85%] gap-8'>
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='text-lg font-semibold font-montserrat'
              onClick={() => setToggle(!status)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavBar;
