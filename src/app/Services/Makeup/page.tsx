import Image from "next/image";
export default function HaircutsPage(){const HairCutImages = [
    {src:'/soft party makeup.jpg', alt: 'Soft Party MakeUp Look' },
    {src:'/smokey makeup.jpg', alt: 'Smokey MakeUp Look' },
    {src:'/Glamour makeup.jpg' ,alt: 'Glamour MakeUp Look' },
    {src:'/engagement makeup.jpg', alt: 'Engagement MakeUp Look' },
    {src:'/bridal makeup.jpg', alt: 'Bridal MakeUp Look' },
    {src:'/reception look.jpg', alt: 'Reception Look'}
]

    return(
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-400 flex flex-col mb-4 p-4"> 
      <h1 className="text-3xl font-bold mb-8 text-center">MakeUp</h1>
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