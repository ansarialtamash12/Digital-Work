// ============ FAQ ITEM ============
const FAQItem = ({ question, answer, isOpen = false }) => (
  <details
    className="border-b border-[rgba(255,255,255,0.08)] py-5 group"
    open={isOpen}
  >
    <summary className="cursor-pointer font-poppins font-medium text-white text-[1rem] flex items-center justify-between list-none">
      {question}
      <span className="text-[#29abe2] text-[1.3rem] flex-none ml-4 group-open:hidden">
        +
      </span>
      <span className="text-[#29abe2] text-[1.3rem] flex-none ml-4 hidden group-open:block">
        −
      </span>
    </summary>
    <p className="text-[#a9b7c8] leading-[1.7] mt-3 mb-0">{answer}</p>
  </details>
);
export default FAQItem;