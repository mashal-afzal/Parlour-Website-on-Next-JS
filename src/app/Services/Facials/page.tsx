import Image from "next/image";
export default function Facials(){const FacialImages = [
    {src:'/hydra facial.jpg', alt: 'Hydra Facial' },
    {src:'/whitening facial.jpg', alt: 'Whitening Facial' },
    {src:'/acne facial.jpg' ,alt: 'Acne Facial' },
    {src:'/deep cleansing.jpg', alt: 'Deep Cleansing' },
    {src:'/golden facial.jpg', alt: 'Golden Facial' },]

    return(
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-400 flex flex-col mb-4 p-4"> 
      <h1 className="text-3xl font-bold mb-8 text-center">Facial Treatments</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {FacialImages.slice(0,4).map((image, index) => (
            <div key={index} className="flex flex-col items-center">
    <Image
    src={image.src}
    alt= {image.alt}
    width= {300}
    height= {200}
    className= "rounded-lg shadow-lg" />
            <p className="text-center mt-4 text-lg font-semibold text-sky-800">
        {image.alt}
                </p>   </div>  ))}
</div>
    <div className="flex flex-col items-center mt-6">
    <Image
    src={FacialImages[4].src}
      alt={FacialImages[4].alt}
      width={300}
      height={200}
      className="rounded-lg shadow-lg"></Image>
      <p className="text-center mt-4 text-lg font-semibold text-sky-800">
            {FacialImages[4].alt}
            </p>
</div>
    </div>
    );}



   


    

