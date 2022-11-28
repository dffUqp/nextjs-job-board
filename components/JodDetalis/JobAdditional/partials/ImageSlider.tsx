import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';

const ImageSlider = ({ images }: { images: string[] }): JSX.Element => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={'auto'}
      className="h-full w-full"
      breakpoints={{
        580: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      }}
    >
      {[...images, ...images].map((elem, index) => (
        <SwiperSlide key={index} className="sm:!w-auto">
          <Image
            src={elem}
            alt="123"
            className="h-[110px] w-[200px] object-cover "
            width={200}
            height={110}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
