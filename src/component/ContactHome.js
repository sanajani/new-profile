import { Link } from "react-router-dom"

const ContactHome = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="flex justify-center items-center flex-col text-white my-40 rounded-lg bg-[#1f1f1f] mx-10">
        <h1 className="text-xl md:text-2xl text-center tracking-wide my-8">Have a project in mind<span className="block font-sans my-2 text-2xl md:text-4xl font-bold">Let Me Help You</span> </h1>
        <Link className="border-white border py-3 px-12 text-xl md:text-2xl mb-8 bg-gray-300 text-[#1f1f1f] rounded-md" to='/contact'>Contact Now</Link>
      </div>
    </div>
  )
}

export default ContactHome