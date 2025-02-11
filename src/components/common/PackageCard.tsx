
import React from 'react'
import AniButton from './AniButton';

interface cardInterface {
    pkg: {
      designation: string;
      name: string;
      type: string;
      alert: string;
      features: string[];
    };
  }


const PackageCard = ({pkg}:cardInterface) => {
  return (
    <div className='package_card xl:hover:scale-105 transition-all flex flex-col gap-2 justify-between min-h-[35rem] max-h-[40rem]  h-[80vh] p-3 text-black krona'>
        <div>
        <div className='rounded-sm px-3 py-1 bg-black text-white text-xs poppins w-fit'>
            {pkg.designation}
        </div>
        <p className='py-3'>
            {pkg.name}
        </p>
        <p className='text-4xl pb-2 fontsecond'>{pkg.type}</p>
        <p className='text-xs text-red-500'>{pkg.alert}</p>

        <h2 className=' py-3'>What's included:</h2>
        {pkg.features.map((feature) => {
            return <ul key={feature} className='text-xs poppins'>
                <li>
                ✅ {feature}
                </li>
            </ul>
        })}
        </div>
        <a className='text-white' target="_blank" href={"https://cal.com/rohan-uqvxp0/30min"}>
        <AniButton classname='w-full'>Start a call</AniButton>
        </a>
    </div>
  )
}

export default PackageCard