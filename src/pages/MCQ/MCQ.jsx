import CreateMCQ from "@/components/MCQ/CreateMCQ";
import MCQContent from "@/components/MCQ/MCQContent";
import MCQLoader from "@/components/ui/MCQLoader";

import { useState } from "react";

// const rawData = `1. নিউটনের প্রথম সূত্র অনুযায়ী কোনটি সঠিক?
//    (a) বস্তুটি ত্যাক্তির ক্রিয়ায় সমান্তরালে চলতে থাকে
//    (b) বস্তুটি বিভাজিত হয়
//    (c) বস্তুটি নির্দিষ্ট গতিতে চলতে থাকে
//    (d) বস্তুটি তাপে উত্তপ্ত হয়
//    **Answer:** (c)

// 2. তাপগতিক প্রথম সূত্র বলে—
//    (a) শক্তি সৃষ্টি ও ধ্বংস হতে পারে
//    (b) মোট শক্তি নির্বাচিত ব্যবস্থায় স্থির থাকে
//    (c) তাপমাত্রা সম্পূর্ণরূপে বিনিময় হয়
//    (d) কার্যের সমান্তরালতা
//    **Answer:** (b)

// 3. চুম্বকের উত্তপ্ত বিন্দুতে কী ঘটে?
//    (a) চৌম্বকীয়তা বৃদ্ধি হয়
//    (b) চৌম্বকীয়তা নিঃশেষিত হয়
//    (c) চৌম্বকীয়তা অর্ধাংশে হ্রাস পায়
//    (d) চৌম্বকের আকার পরিবর্তিত হয়
//    **Answer:** (b)

// 4. সমতল প্রতিফটনের নিয়ম হল—
//    (a) প্রতিফটনের কোণ = আপস্কুলার কোণ
//    (b) প্রতিফটনের কোণ = প্রতিবিম্বের কোণ
//    (c) প্রতিফটনের কোণ = 90°
//    (d) প্রতিফটনের কোণ = স্ফটিকের কোণ
//    **Answer:** (a)

// 5. ফটোইলেকট্রিক প্রভাবের ব্যাখ্যা দেয়—
//    (a) তরঙ্গ তত্ত্ব
//    (b) কণা তত্ত্ব
//    (c) উভয়
//    (d) উভয়ই সঠিক
//    **Answer:** (b)

// 6. যে শক্তির উৎসটি স্থায়ীভাবে ব্যবহৃত হতে পারে—
//    (a) সৌরশক্তি
//    (b) বজ্রপাত শক্তি
//    (c) কয়লা
//    (d) বায়ুচালিত
//    **Answer:** (a)

// 7. কোন এককটি শক্তির হিসাবে ব্যবহৃত হয়?
//    (a) ওয়াট
//    (b) নিউটন
//    (c) প্যাসকেল
//    (d) জুল
//    **Answer:** (d)

// 8. তরঙ্গের ভগ্নাংশ কোনটি?
//    (a) v = λf
//    (b) v = μg
//    (c) v = kt
//    (d) v = pr
//    **Answer:** (a)

// 9. কোন বিকিরণটি প্রাকৃতিক গভীরতায় আবিষ্কৃত হয়েছিল?
//    (a) এক্স-রে
//    (b) গ্যামা-রে
//    (c) ইউল্ট্রা ভায়োলেট
//    (d) ইনফ্রারেড
//    **Answer:** (b)

// 10. গ্যাসের চাপের কারণ কী?
//     (a) অণুর ভর
//     (b) অণুর তাপীয় গতি
//     (c) গ্যাসের আয়তন
//     (d) চাপের সূত্র
//     **Answer:** (b)`;

const MCQ = () => {
  const [mcqContent, setMCQContent] = useState(null);
  console.log(mcqContent);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-3xl  mx-auto p-6 space-y-8">
       

        {isLoading && <MCQLoader />}
        {!mcqContent && (
          <CreateMCQ
            setMCQContent={setMCQContent}
            setIsLoading={setIsLoading}
          />
        )}
        {mcqContent && <MCQContent mcqContent={mcqContent} />}
      </div>
    </div>
  );
};

export default MCQ;
// return (
//   <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
//     <div className="max-w-3xl mx-auto">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
//           MCQ Questions
//         </h1>
//         <p className="text-gray-600">Select the best answer for each question</p>
//       </div>

//       <div className="space-y-6">
//         {mcqs.map((q, qIndex) => {
//           const selected = userAnswers[qIndex];
//           const correct = q.answer;

//           return (
//             <div
//               key={qIndex}
//               className="backdrop-blur-sm bg-white/30 p-6 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
//             >
//               <div className="flex items-start gap-4">
//                 <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full font-semibold">
//                   {qIndex + 1}
//                 </span>
//                 <h3 className="text-xl font-medium text-gray-800">{q.question}</h3>
//               </div>

//               <ul className="mt-6 space-y-3">
//                 {q.options.map((option, oIndex) => {
//                   let optionStyle = clsx(
//                     "flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 border-2",
//                     !submitted && "hover:bg-purple-50",
//                     submitted &&
//                       selected?.trim() === option?.trim() &&
//                       option?.trim() === correct?.trim() &&
//                       "bg-green-50 border-green-100",
//                     submitted &&
//                       selected?.trim() === option?.trim() &&
//                       option?.trim() !== correct?.trim() &&
//                       "bg-red-50 border-red-100",
//                     !submitted && selected === option && "bg-purple-50 border-purple-100",
//                     !selected && "border-transparent"
//                   );

//                   return (
//                     <li key={oIndex} className={optionStyle}>
//                       <div
//                         className={clsx(
//                           "w-5 h-5 rounded-full border-2 flex items-center justify-center",
//                           selected === option ? "border-purple-500" : "border-gray-300"
//                         )}
//                       >
//                         {submitted &&
//                           selected?.trim() === option?.trim() &&
//                           option?.trim() === correct?.trim() && (
//                             <Check className="w-4 h-4 text-green-500" />
//                           )}
//                         {submitted &&
//                           selected?.trim() === option?.trim() &&
//                           option?.trim() !== correct?.trim() && (
//                             <X className="w-4 h-4 text-red-500" />
//                           )}
//                         {!submitted && selected === option && (
//                           <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
//                         )}
//                       </div>
//                       <label
//                         className={clsx(
//                           "flex-1 cursor-pointer",
//                           submitted &&
//                             selected?.trim() === option?.trim() &&
//                             option?.trim() === correct?.trim() &&
//                             "text-green-700 font-medium",
//                           submitted &&
//                             selected?.trim() === option?.trim() &&
//                             option?.trim() !== correct?.trim() &&
//                             "text-red-700 font-medium"
//                         )}
//                       >
//                         <input
//                           type="radio"
//                           name={`question-${qIndex}`}
//                           value={option}
//                           disabled={submitted}
//                           checked={selected === option}
//                           onChange={() => handleOptionChange(qIndex, option)}
//                           className="sr-only"
//                         />
//                         {option}
//                       </label>
//                     </li>
//                   );
//                 })}
//               </ul>

//               {submitted && selected !== correct && (
//                 <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                   <p className="text-sm text-blue-700 flex items-center gap-2">
//                     <Check className="w-4 h-4" />
//                     <span>
//                       সঠিক উত্তর: <span className="font-medium">{correct}</span>
//                     </span>
//                   </p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {!submitted ? (
//         <button
//           onClick={handleSubmit}
//           className="mt-8 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-200 hover:-translate-y-0.5"
//         >
//           Submit Answers
//         </button>
//       ) : (
//         <div className="text-center mt-8 p-4 bg-green-50 rounded-xl">
//           <p className="text-green-700 font-medium text-lg">✅ উত্তর জমা দেওয়া হয়েছে!</p>
//         </div>
//       )}
//     </div>
//   </div>
// );
