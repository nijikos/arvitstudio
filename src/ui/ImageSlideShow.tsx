import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type ImageSlideShowProps = {
  images: string[];
};

const ImageSlideShow = ({ images }: ImageSlideShowProps) => {
  return (
    <Slide
      canSwipe={true}
      autoplay={false}
      arrows={false}
      indicators={true}
      duration={5000}
      transitionDuration={800}
    >
      {images.map((image: string, ii: number) => {
        return (
          <div key={ii} className='each-slide-effect'>
            <Image
              loading='lazy'
              className='h-[480px] lg:h-[300px] object-cover'
              src={image}
              width={840}
              height={840}
              placeholder='blur'
              alt='Portfolio Image'
              blurDataURL='/images/defaultimg.jpg'
            />
          </div>
        );
      })}
    </Slide>
  );
};

export default ImageSlideShow;
