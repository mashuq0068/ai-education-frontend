export const parseMCQs = (text) => {
  return text.split(/\n\s*\n/).map((block) => {
    const lines = block
      .trim()
      .split("\n")
      .map((line) => line.trim());

    // Get question from the first line regardless of number
    const questionLine = lines[0];
    const questionMatch = questionLine.match(/^\d+\.\s(.+)/);
    const question = questionMatch ? questionMatch[1] : questionLine;

    const options = lines.slice(1, 5);
    const answerLine = lines.find((line) => line.startsWith("**Answer:**"));
    const answerKey = answerLine
      ? answerLine.replace("**Answer:**", "").trim()
      : "";

    const correctOption = options.find((opt) =>
      opt.trim().startsWith(answerKey)
    );

    return { question, options, answer: correctOption || "" };
  });
};
