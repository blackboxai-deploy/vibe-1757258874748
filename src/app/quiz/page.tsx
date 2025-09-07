import { QuizContainer } from "@/components/quiz/QuizContainer";

export const metadata = {
  title: "Makeup Quiz - Find Your Perfect Match | MatchMyMakeup",
  description: "Take our personalized makeup quiz to discover products perfectly matched to your skin tone and style preferences. Get expert recommendations in just 2 minutes.",
};

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <QuizContainer />
    </div>
  );
}