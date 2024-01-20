import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-center sm:items-start w-full max-xl:padding-x pt-28 z-10'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-4xl md:text-8xl max-sm:text-[72px] relative max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap z-10 sm:pr-10 text-[35px] md:text-8xl'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block sm:mt-3 text-[35px] md:text-8xl'>
            Nike
          </span>{" "}
          <span className='sm:mt-3 text-[35px] md:text-8xl'>Shoes</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 max-w-sm text-left'>
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button
          label='Shop now'
          iconUrl={arrowRight}
          link='https://www.nike.com/pl/'
        />
        <div className='flex justify-center sm:justify-start items-start flex-wrap w-full mt-10 gap-8 sm:gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-2xl md:text-4xl font-palanquin font-bold'>
                {stat.value}
              </p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain relative z-10 cursor-pointer'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
