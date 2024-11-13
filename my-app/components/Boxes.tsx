import React from 'react';
import Image from 'next/image';

const Boxes = () => {
  return (
    <div className="bg-orange-500 p-10 pt-32 h-full">
      {/* First Row of Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 m-4 sm:gap-6 md:gap-8 lg:gap-10">
        
        {/* Box 1 */}
        <div className="w-full bg-white shadow-lg rounded-lg border border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <Image
            src="/images/product1.jpg"
            alt="Box 1 Image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>

        {/* Box 2 */}
        <div className="w-full bg-white shadow-lg rounded-lg border border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <Image
            src="/images/product2.jpg"
            alt="Box 2 Image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>

        {/* Box 3 */}
        <div className="w-full bg-white shadow-lg rounded-lg border border-gray-300 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <Image
            src="/images/product3.jpg"
            alt="Box 3 Image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </div>

      {/* Second Row of Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 m-6 sm:gap-6 md:gap-8 lg:gap-10">
        
        {/* Box 4 */}
        <div className="w-full bg-white shadow-lg rounded-lg border border-orange-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <Image
            src="/images/product4.jpg"
            alt="Box 4 Image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>

        {/* Box 5 */}
        <div className="w-full bg-white shadow-lg rounded-lg border border-orange-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <Image
            src="/images/product5.jpg"
            alt="Box 5 Image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Boxes;
