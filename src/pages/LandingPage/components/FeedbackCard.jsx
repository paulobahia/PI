import { quotes } from "../../../../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex  justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[390px] md:mr-10 sm:mr-5 mr-0 my-5 hover:bg-gradient-to-r from-purple-100 to-purple-500">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins text-left  font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins text-black font-semibold text-[20px] leading-[32px]">
          {name}
        </h4>
        <p className="font-poppins font-medium text-[16px] leading-[24px] text-gray-600">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
