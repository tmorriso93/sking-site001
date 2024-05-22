


// import React from 'react';
// import Image from 'next/image';
// import HeroImage1 from '../../../public/images/bgImg001.jpg';
// import HeroImage2 from '../../../public/images/bgImg002.jpg';
// import BackgroundImage from '../../../public/images/whitebg001.jpg'; // Import your dummy background image


// function HeroSection() {


//   return (


//  <section id="brand-hero" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100" >
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 lg:p-64 ">
        
//         <div className="section-title flex flex-col items-center md:items-start mb-8 md:mb-0">
//           <div className="heading-holder mb-4">
//             <h3 className="text-xl md:text-2xl font-light">Hi!, I'm</h3>
//             <h1 className="text-3xl md:text-5xl font-light">STEVEN KING</h1>
//           </div>
          
//           <div className="para-text pb-2">
//             <p className="text-lg md:text-xl">&nbsp; &nbsp; &nbsp; &nbsp; I am a Lawyer.</p>
//           </div>
//         </div>
        
//         <div className="svg-container max-w-lg md:max-w-lg w-full p-2">
//           <div className="bg-gray-200 h-64 flex items-center justify-center">
//           <Image
//         priority
//         src={HeroImage2}
//         alt="Hero Image 2"
//         quality={100}
//         layout="responsive"
//         width={800}
//         height={600}
//         className="object-cover pointer-events-none select-none padding-right:10px;"
//       />
//           </div>
//         </div>
//       </div>
//     </section> 



//   )
// }

// export default HeroSection 





import React from 'react';
import Image from 'next/image';
import HeroImage1 from '../../../public/images/bgImg001.jpg';
import HeroImage2 from '../../../public/images/tocourt001.jpg';
import BackgroundImage from '../../../public/images/whitebg004.jpg';
import BackgroundImage2 from '../../../public/images/King Law Logo A3.png';

function HeroSection() {
  return (
    <section
      id="brand-hero"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }} // Apply the background image
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> Optional: overlay for better text contrast */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6 lg:p-64 z-10"> {/* Added z-10 to bring content above overlay */}
        <div className="section-title flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="heading-holder mb-4">
            <h3 className="text-xl md:text-2xl font-light text-slate-700">Hi, I'm</h3> {/* Added text-white for better contrast */}
            <h1 className="text-3xl md:text-5xl font-light text-slate-700">STEVEN KING</h1> {/* Added text-white for better contrast */}
          </div>
          <div className="para-text pb-2 sm:pb-6">
            <p className="text-lg md:text-xl text-slate-700">&nbsp; &nbsp; &nbsp; &nbsp; I am a Lawyer.</p> {/* Added text-white for better contrast */}
          </div>
        </div>
        {/* <div className="svg-container max-w-lg md:max-w-lg w-full p-2">
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <Image
              priority
              src={HeroImage2}
              alt="Hero Image 2"
              quality={100}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover pointer-events-none select-none"
            />
          </div>
        </div> */}

<div className="svg-container max-w-lg md:max-w-lg w-full p-2 relative">
          <div className="relative bg-gray-200 h-64 flex items-center justify-center">
            <Image
              priority
              src={HeroImage2}
              alt="Hero Image 2"
              quality={100}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover pointer-events-none select-none opacity-55" // Reduced opacity for stronger contrast
            />
            <Image
              priority
              src={BackgroundImage2}
              alt="Background Image 2"
              quality={100}
              layout="fill"
              className="object-contain pointer-events-none select-none absolute top-0 left-0 shadow-lg" // Added shadow for more prominence
              style={{ opacity: 1 }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;