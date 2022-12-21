import ImageSlider from './partials/ImageSlider';

type JobAdditionalProps = {
  employment_type: string[];
  benefits: string[];
  images: string[];
};

const JobAdditional = ({
  employment_type,
  benefits,
  images,
}: JobAdditionalProps) => {
  return (
    <div className="mb-20 flex flex-col gap-y-20 sm:flex-col-reverse">
      <div className="flex flex-col gap-5">
        <span className="block border-b border-gray pb-2 text-xxl font-bold text-dark">
          Additional info
        </span>

        <div>
          <span className="mb-1.5 block font-Roboto text-md text-dark">
            Employment type
          </span>
          <div className="flex flex-wrap gap-2">
            {employment_type.map((elem, index) => (
              <div
                className="flex h-[49px] w-full max-w-[220px] items-center justify-center rounded-lg border border-option-border-100 bg-option-selected-100 font-bold text-dark"
                key={index}
              >
                {elem}
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-1.5 block font-Roboto text-md text-dark">
            Benefits
          </span>
          <div className="flex flex-wrap gap-2">
            {benefits.map((elem, index) => (
              <div
                className="flex h-[49px] w-full max-w-[220px] items-center justify-center rounded-lg border border-option-border-200 bg-option-selected-200 font-bold text-golden"
                key={index}
              >
                {elem}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <span className="mb-4 block border-b border-gray pb-2 text-xl font-bold text-dark">
          Attached images
        </span>

        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default JobAdditional;
