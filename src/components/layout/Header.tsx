import { ReactComponent as GithubIcon } from './../../assets/image/github.svg'

const Header = () => {
  return (
    <>
      <nav
        className={`col-end-3 row-start-1 row-end-2 bg-primary-color shadow`}
      >
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <a className="text-white font-bold align-middle" href="/">
                  React SQL Editor
                </a>
              </div>

              <a
                className="text-gray-300 hover:text-white py-2 rounded-md text-sm font-medium"
                href="https://github.com/harshdev92/React-Sql-Query-App"
                target="_blank"
                rel="noreferrer"
                title="github repository"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
