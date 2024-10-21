import Image from "next/image";

export default function MehendiPage() {
  const MehendiImages = [
    { src: '/simple fingers mehendi.jpg', alt: 'Mehendi only on fingers' },
    { src: '/hands mehndi.jpg', alt: ' Mehendi on Hand' },
    { src: '/bridal mehendi.jpg', alt: 'Bridal Mehendi' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-400 flex flex-col mb-4 p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Mehendi Designs</h1>
      <div className="grid grid-cols-1 gap-6">
        {MehendiImages.map((image, index) => (
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
}
