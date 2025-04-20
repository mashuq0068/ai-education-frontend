/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"; // If you're using shadcn/ui
import axiosInstance from "@/lib/axiosInstance";
import { Sparkles } from "lucide-react";

const CreateMCQ = ({ setMCQContent, setIsLoading }) => {
  const glassBg =
  "backdrop-blur-lg bg-white/70 dark:bg-[#211639]/70 border border-white/20 shadow-2xl";

const animatedBorder =
  "relative before:absolute before:inset-[-2px] before:-z-10 before:rounded-[2.25rem] ";
  const generateMcq = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(`/ai/QA/generate-mcq`);
      setMCQContent(response?.data?.data?.content);
    } catch (error) {
      console.error(
        "Error generating MCQ:",
        error?.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateMCQ = () => {
    setMCQContent("");
    generateMcq();
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 md:py-20 ">
    <div
      className={`max-w-2xl w-full rounded-[2rem] p-8 md:p-12 text-center space-y-7 overflow-hidden transition-shadow duration-500 ${glassBg} ${animatedBorder} animate-fade-in`}
      style={{ boxShadow: "0 12px 48px 0 rgba(59, 130, 246, 0.13)" }}
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-violet-100/50 to-blue-200/40 shadow-lg mb-2 animate-pulse">
          <Sparkles className="w-10 h-10 text-indigo-500 animate-spin-slow" />
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-sm text-gradient-primary bg-gradient-to-r from-indigo-600 via-blue-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
          Welcome to IntelliMCQ
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium max-w-lg mx-auto">
          Instantly generate intelligent multiple-choice questions with a spark of AI! Try it–it's magic.
        </p>
      </div>

      <div className="pt-4 flex justify-center">
        <Button
          onClick={handleCreateMCQ}
          className="cursor-pointer relative bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl hover:scale-105 hover:from-purple-500 hover:to-sky-400 focus-visible:ring-2 ring-offset-2 ring-indigo-400 transition-all duration-300 text-lg tracking-wide"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-white animate-bounce" />
            Start MCQ
          </span>
        </Button>
      </div>
    </div>
    <style>
      {`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 2.7s ease-in-out infinite alternate;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spin 2.3s linear infinite;
        }
      `}
    </style>
  </div>
  );
};

export default CreateMCQ;
