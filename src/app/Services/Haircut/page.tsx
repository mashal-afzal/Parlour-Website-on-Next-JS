import Image from "next/image";
export default function HaircutsPage(){const HairCutImages = [
    {src:'/bob cutting.jpg', alt: 'Bob Cut' },
    {src:'/feather cut.png', alt: 'Feather Cut' },
    {src:'/layer cut.jpg' ,alt: 'Layer Cut' },
    {src:'/step cut.jpg', alt: 'Step Cut' },
    {src:'/U-shape.jpg', alt: 'U-Shape Cut' },
    {src:'/v-shape cutting.jpg', alt: 'V-Sahpe Cut'}
]

    return(
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-400 flex flex-col mb-4 p-4"> 
      <h1 className="text-3xl font-bold mb-8 text-center">Hair Cuts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {HairCutImages.slice(0, 6).map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg shadow-lg"
            />
            <p className="text-center mt-4 text-lg font-semibold text-sky-800">
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};



