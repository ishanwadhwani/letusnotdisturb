import Link from 'next/link'
import { spokenwords } from '@/constants/data';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const page = () => {
  return (
    <div className='text-white'>
      {/* heading */}
      <div className='mt-10 text-center'>
        <h2 className='px-10 md:px-[60px] text-2xl md:text-3xl lg:text-4xl mb-10'>
          "Writers and artists know that ethereal moment, when just one, 
          fleeting something-a chill, an echo, the click of a lamp, 
          a question ignites the flame of an entire work that blazes suddenly into consciousness." 
        </h2>
        <p className='italic underline text-lg mb-10'> 
            — Nadine C. Keels
        </p>
        <h1 className='text-4xl md:text-5xl lg:text-7xl md:px-[300px] mt-10'>
          Lehza.in x Voice Artist
        </h1>
      </div>

      {/* instagram posts */}
      <div className='mt-10 lg:mt-[100px] px-10 lg:ml-10 grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-4 items-center justify-center cursor-pointer'>
          {spokenwords.map((spokenwords, index) => {
            return (
              <div className='relative' key={index}>
              <Link
                href={spokenwords.url}>
                  <img 
                    src={spokenwords.img} 
                    alt="could not load the image"
                    className='md:w-[340px] md:h-[270px] lg:w-[450px] lg:h-[380px]'/>
              </Link>
            </div>
            )
            })}
      </div>
        
      {/* next pages */}
      <div className="flex flex-row items-end justify-end mt-10 md:mt-[100px]">
        <Link
          href="/lehza-in/lehza-artist/mental-health-and-lifestyle"
          className="basis-1/2 flex flex-row items-center justify-start">
          <AiOutlineLeft
            className="w-5 h-5 md:w-8 md:h-8 px-1"
          />
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
            Art
          </p>
        </Link>
        <Link
          href="/lehza-in/lehza-artist/art"
          className="basis-1/2 flex flex-row items-center justify-end">
          <p className="lg:text-5xl md:text-3xl text-sm whitespace-pre-wrap">
            Author
          </p>
          <AiOutlineRight
            className="w-5 h-5 md:w-8 md:h-8 px-1"
          />
        </Link>
      </div>
    </div>
    
  )
}

export default page