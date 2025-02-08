import Image from "next/image"

function PhotoGallery() {
  return (
    <section className="max-w-[1440px] mx-auto mt-[100px] mb-[200px] px-4">
      <div className="text-center space-y-4 mb-10">
        <h3 className="text-xl font-semibold text-gray-600">Share your setup with</h3>
        <h2 className="text-4xl font-bold text-gray-900">#FurniroFurniture</h2>
      </div>

      <div className="relative w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 lg:h-[600px]">
        {/* Image 1 */}
        <div className="relative h-[200px] lg:absolute lg:top-0 lg:left-0 lg:h-[382px] lg:w-[100px]">
          <Image
            src="/Rectangle 36.png"
            alt="image1"
            fill
            sizes="(max-width: 1024px) 45vw, 100px"
            className="object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-[200px] lg:absolute lg:top-[70px] lg:left-[100px] lg:h-[312px] lg:w-[451px]">
          <Image
            src="/Rectangle 38.png"
            alt="image2"
            fill
            sizes="(max-width: 1024px) 45vw, 451px"
            className="object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="relative h-[200px] lg:absolute lg:top-[160px] lg:left-[570px] lg:h-[392px] lg:w-[295px]">
          <Image
            src="/Rectangle 40.png"
            alt="image3"
            fill
            sizes="(max-width: 1024px) 45vw, 295px"
            className="object-cover"
          />
        </div>

        {/* Image 4 */}
        <div className="relative h-[200px] lg:absolute lg:top-[100px] lg:left-[875px] lg:h-[384px] lg:w-[290px]">
          <Image
            src="/Rectangle 43.png"
            alt="image4"
            fill
            sizes="(max-width: 1024px) 45vw, 290px"
            className="object-cover"
          />
        </div>

        {/* Image 5 */}
        <div className="relative h-[200px] lg:absolute lg:top-[15px] lg:left-[1170px] lg:h-[433px] lg:w-[230px]">
          <Image
            src="/Rectangle 45.png"
            alt="image5"
            fill
            sizes="(max-width: 1024px) 45vw, 230px"
            className="object-cover"
          />
        </div>

        {/* Image 6 */}
        <div className="relative h-[200px] lg:absolute lg:top-[400px] lg:left-[0px] lg:h-[323px] lg:w-[200px]">
          <Image
            src="/Rectangle 37.png"
            alt="image6"
            fill
            sizes="(max-width: 1024px) 45vw, 200px"
            className="object-cover"
          />
        </div>

        {/* Image 7 */}
        <div className="relative h-[200px] lg:absolute lg:top-[400px] lg:left-[215px] lg:h-[242px] lg:w-[344px]">
          <Image
            src="/Rectangle 39.png"
            alt="image7"
            fill
            sizes="(max-width: 1024px) 45vw, 344px"
            className="object-cover"
          />
        </div>

        {/* Image 8 */}
        <div className="relative h-[200px] lg:absolute lg:top-[460px] lg:left-[875px] lg:h-[242px] lg:w-[178px]">
          <Image
            src="/Rectangle 41.png"
            alt="image8"
            fill
            sizes="(max-width: 1024px) 45vw, 178px"
            className="object-cover"
          />
        </div>

        {/* Image 9 */}
        <div className="relative h-[200px] lg:absolute lg:top-[460px] lg:left-[1065px] lg:h-[196px] lg:w-[258px]">
          <Image
            src="/Rectangle 44.png"
            alt="image9"
            fill
            sizes="(max-width: 1024px) 45vw, 258px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery

