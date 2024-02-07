import { Footer } from "flowbite-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className=" w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Mohit
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://65a8c029ec9a243be0b0437d--steady-travesseiro-7a9754.netlify.app/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  Github Profile Finder
                </Footer.Link>
                <Footer.Link
                  href="https://65ae1c39f20cd1083a767558--cozy-tapioca-a555f0.netlify.app/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  Bhagavad Geeta
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Mohitb123637"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/mohit-bhandari-446a822a0/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  linkedin
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/mohitb12363/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_black" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_black" rel="noopener noreferrer">
                  Term &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Mohit blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/mohit-bhandari-446a822a0/"
              target="_blank"
              className="text-blue-800"
              icon={FaLinkedin}
            />
            <Footer.Icon
              href="https://github.com/Mohitb123637"
              target="_blank"
              className="text-black"
              icon={FaGithub}
            />
            <Footer.Icon
              href="https://www.instagram.com/mohitb12363/"
              target="_blank"
              className=" text-pink-700"
              icon={FaInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
