
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="md:text-2xl sm:text-2xl text-xl text-[#00df9a] font-bold p-2">
          Empower your Laboratories with Our Comprehensive LIMS Solutions.
        </p>
        <h1 className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
          Transforming Laboratories with Innovation.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible solution for handling of
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["SAMPLES", "TESTS", "ANALYTICS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your Lab Analytics to increase efficiency for Samples, Tests, Records on our
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" onClick={() => navigate('/login')}>
          Already a User?
        </button>
      </div>
    </div>
  );
};

export default Hero;

//https://youtu.be/ZU-drSVodBw?t=1806
