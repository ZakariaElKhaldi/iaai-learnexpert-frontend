import React from 'react';
import Link from 'next/link';

const QuizResultsPage = ({ params }: { params: { courseId: string; quizId: string } }) => {
  const { courseId, quizId } = params;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quiz Results: {quizId} (Course: {courseId})</h1>

      {/* Pass/Fail Status and Score Placeholder */}
      <div className="bg-gray-100 p-4 rounded mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Status: [Pass/Fail]</h2>
        <p className="text-xl">Score: [Score]%</p>
      </div>

      {/* Review of Answers Section Placeholder */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Review Your Answers</h2>
        <div className="bg-white p-6 rounded shadow-md">
          <p>Review of questions and answers will be displayed here.</p>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        {/* Option to Retake Quiz */}
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          Retake Quiz
        </button>
        {/* Link to Continue Course */}
        <Link href={`/courses/${courseId}`} className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400">
          Continue Course
        </Link>
      </div>
    </div>
  );
};

export default QuizResultsPage;
