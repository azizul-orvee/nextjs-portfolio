import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
            Lorem dolor sit, amet consectetur adipisicing elit. Accusamus necessitatibus eos aliquam esse quasi, nihil omnis repellat architecto et? Cumque, dicta iure, fugiat sequi necessitatibus praesentium consequuntur ullam suscipit earum quam nihil veniam, doloribus velit quis quidem quas labore numquam? Esse, tenetur modi aperiam officia culpa maiores illum est nisi eaque ex ab deleniti reiciendis dolorum quam, cumque voluptas iste adipisci! Excepturi, nesciunt dolorem. Repellat nemo aperiam, voluptatibus sed dolorum facere odio, maiores laboriosam optio dolor numquam quis saepe. Optio.

          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, asperiores perspiciatis illum consectetur rerum natus at earum. Aliquid debitis modi voluptatem quidem ad, magni facere explicabo. Asperiores, libero rem? Recusandae incidunt quod obcaecati inventore alias laborum impedit harum in provident quaerat debitis, omnis tempora adipisci voluptatem error maiores consequuntur esse.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
