import Image from 'next/image';

const SubscribeBanner = () => {
  return (
    <div className="bg-[#0B65A9] px-4 py-3 text-white text-center text-xs flex items-center justify-center gap-2">
      <Image src="/icons/subscribe.svg" alt="subscribe" width={16} height={16} />
      NEVER MISS NEW LAUNCHES! SUBSCRIBE!
    </div>
  );
};

export default SubscribeBanner;

