import { footerLogo } from "../assets/images"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} width={150 } height={46}  alt="" />
        </a>
        <p className="mt-6 text-base leading-7 font-monserrat text-white-400">
        Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
        </p>
      </div>
      </div>
    </footer>
  )
}

export default Footer