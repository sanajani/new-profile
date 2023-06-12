
const Testmonials = ({data}) => {
  const {id,message,name,job_title,company_name} = data;
  return (
    <div className="max-w-[650px] mx-auto h-[300px] my-24 md:my-32 flex justify-center">    
            <div key={id} className="text-white bg-[#1f1f1f] py-10 flex flex-col  w-full mx-10 text-left px-8 rounded-md shadow-2xl">
              <p className=" text-[20px] text-center">{message}</p>
              <h2 className="text-center mt-8 mb-2 font-bold tracking-wider text-2xl">{name}</h2>
              <p className="text-center font-[600] text-[18px] tracking-wide">{job_title}</p>
              <p className="text-center">{company_name}</p>
            </div>      
    </div>
  )
}

export default Testmonials