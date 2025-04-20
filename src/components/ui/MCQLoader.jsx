import { LoaderCircle } from 'lucide-react';


const MCQLoader = () => {
    const shimmerGradient =
  "bg-gradient-to-r from-purple-300 via-blue-200 to-purple-300";
    return (
        <div className="fixed min-h-screen inset-0 z-40 flex items-center justify-center backdrop-blur-xl bg-black/30">
        <div className="glass rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 shadow-lg">
              <LoaderCircle className="text-violet-500 animate-spin" size={40} strokeWidth={2.5} />
            </span>
          </div>
          <div 
            className={`w-32 h-3 rounded-full mb-6 overflow-hidden ${shimmerGradient} relative`}>
            <span className="absolute left-0 top-0 w-full h-full bg-white/40 animate-[shimmer_1.2s_linear_infinite]" />
          </div>
          <div className="text-xl font-semibold text-center text-violet-700 dark:text-violet-200 tracking-wide animate-pulse">
            Generating MCQ...
          </div>
          <style>
            {`
              @keyframes shimmer {
                0% { transform: translateX(-100%); opacity: 0.4;}
                50% { transform: translateX(100%); opacity: 0.8;}
                100% { transform: translateX(100%); opacity: 0;}
              }
              .animate-[shimmer_1.2s_linear_infinite] {
                animation: shimmer 1.2s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
    );
};

export default MCQLoader;