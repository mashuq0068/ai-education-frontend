/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"; // If you're using shadcn/ui
import axiosInstance from "@/lib/axiosInstance";
import { Sparkles } from "lucide-react";

const CreateMCQ = ({ setMCQContent, setIsLoading }) => {
  const generateMcq = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(`/ai/QA/generate-mcq`);
console.log(response?.data);
console.log(response?.data?.data?.content);
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full   rounded-3xl p-8 md:p-12 text-center space-y-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <Sparkles className="w-10 h-10 text-indigo-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500">
            Welcome to IntelliMCQ
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Instantly generate intelligent multiple-choice questions by clicking
            below!
          </p>
        </div>

        <div className="pt-4">
          <Button
            onClick={handleCreateMCQ}
            className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            Start MCQ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateMCQ;
