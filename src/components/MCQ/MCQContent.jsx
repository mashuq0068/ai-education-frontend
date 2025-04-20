/* eslint-disable react/prop-types */
import { parseMCQs } from "@/utils/parseMCQ";
import { useState } from "react";

const MCQContent = ({ mcqContent }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleOptionChange = (qIndex, value) => {
    setUserAnswers({ ...userAnswers, [qIndex]: value.trim() });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };
  let mcqs;
  if (mcqContent) {
    mcqs = parseMCQs(mcqContent);
  }
  return (
    <div>
      {mcqs?.map((q, qIndex) => {
        const selected = userAnswers[qIndex];
        const correct = q.answer;

        return (
          <div key={qIndex} className="bg-white my-5 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-3">
              {qIndex + 1}. {q.question}
            </h3>
            <ul className="space-y-2">
              {q.options.map((option, oIndex) => {
                let isSelected = selected === option;
                let isCorrect = correct?.trim() === option?.trim();
                let optionStyle =
                  "p-3 rounded-lg cursor-pointer border transition-all duration-200 flex items-center justify-between";

                if (submitted) {
                  if (isSelected && isCorrect) {
                    optionStyle +=
                      " bg-green-100 border-green-500 text-green-800 font-semibold";
                  } else if (isSelected && !isCorrect) {
                    optionStyle +=
                      " bg-red-100 border-red-500 text-red-800 font-semibold";
                  } else {
                    optionStyle += " border-gray-300 text-gray-600";
                  }
                } else {
                  optionStyle += isSelected
                    ? " border-blue-500 bg-blue-50 text-blue-800 font-medium shadow-sm scale-[1.02]"
                    : " hover:bg-blue-50 border-gray-300";
                }

                return (
                  <li
                    key={oIndex}
                    className={optionStyle}
                    onClick={() =>
                      !submitted && handleOptionChange(qIndex, option)
                    }
                  >
                    <span>{option}</span>
                    {!submitted && isSelected && (
                      <span className="text-blue-500 font-bold">✓</span>
                    )}
                    {submitted && isSelected && isCorrect && (
                      <span className="text-green-600 font-bold">✓</span>
                    )}
                    {submitted && isSelected && !isCorrect && (
                      <span className="text-red-600 font-bold">✗</span>
                    )}
                  </li>
                );
              })}
            </ul>

            {submitted && selected !== correct && (
              <p className="mt-2 text-sm text-blue-600">
                ✅ সঠিক উত্তর: <span className="font-semibold">{correct}</span>
              </p>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-6 cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Answers
        </button>
      ) : (
        <div className="text-center mt-8 text-green-600 font-semibold text-lg">
          ✅ উত্তর জমা দেওয়া হয়েছে!
        </div>
      )}
    </div>
  );
};

export default MCQContent;
