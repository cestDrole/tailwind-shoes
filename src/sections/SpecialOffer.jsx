import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col justify-center items-center'>
        <div>
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg self-start'>
            <span className='text-coral-red'>Special</span> Offer
          </h2>
          <p className='mt-8 lg:max-w-lg info-text text-justify'>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredivle savings, we
            offer unparalleled value that sets us apart
          </p>
          <p className='mt-6 lg:max-w-lg info-text text-justify'>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional
          </p>

          <div className='mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start'>
            <Button label='Shop now' iconUrl={arrowRight} />
            <Button
              label='Learn more'
              backgroundColor='bg-white'
              borderColor='border-slate-grey'
              textColor='text-slate-grey'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
