
const Button = ({label, iconUrl}) => {
  return (
    <button className=" flex justify-center items-center gap-2 px-7 py-4 border font-monserrat text-lg leading-none bg-coral-red rounded-full text-white" >{label}
    <img className="ml-2 rounded-full  h-5 w-5" src={iconUrl} alt={label} />
    </button>
    )
}

export default Button