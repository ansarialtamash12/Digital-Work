// ============ FEATURE CARD ============
const FeatureCard = ({ number, title, description }) => (
  <div className="bg-[#0d1826] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-6 border-t-[3px] border-t-[#f2b705]">
    <div className="w-10 h-10 rounded-[10px] bg-[rgba(41,171,226,0.12)] text-[#3fc1f0] flex items-center justify-center mb-4 text-[1.1rem] font-poppins font-semibold">
      {number}
    </div>
    <h3 className="font-poppins font-semibold text-white text-[1.02rem] mb-2">
      {title}
    </h3>
    <p className="text-[#a9b7c8] text-[0.9rem] leading-[1.7] m-0">
      {description}
    </p>
  </div>
);
export default FeatureCard;