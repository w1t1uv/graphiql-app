import LinkGitHub from './UI/LinkGitHub';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center shrink-0 bg-gray-800 px-8 py-1 text-white">
      <ul>
        <li>
          <LinkGitHub name={'w1t1uv'} link={'https://github.com/w1t1uv'} />
        </li>
      </ul>
      <div className="font-bold">© 2024</div>
      <div>
        <a href="https://rs.school/react/" rel="noreferrer" target="_blank">
          <img
            src="./public/images/logo.svg"
            alt="logo RS School"
            className="w-24 hover: text-blue-700"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
