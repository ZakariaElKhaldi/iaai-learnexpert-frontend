import React from 'react';

const QuizPage = ({ params }: { params: { courseId: string; quizId: string } }) => {
  const { courseId, quizId } = params;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quiz: {quizId} (Course: {courseId})</h1>

      {/* Quiz Title and Instructions Placeholder */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">Quiz Title</h2>
        <p>Quiz instructions and time limit (if applicable) go here.</p>
      </div>

      {/* Question Navigation Placeholder */}
      <div className="mb-6">
        <p>Question navigation (e.g., 1, 2, 3...) goes here.</p>
      </div>

      {/* Question Display Area Placeholder */}
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Question 1</h3>
        <p className="mb-4">Question text goes here.</p>
        {/* Answer Options Placeholder */}
        <div className="space-y-2">
          <div>
            <input type="radio" id="option1" name="question1" value="option1" />
            <label htmlFor="option1" className="ml-2">Option 1</label>
          </div>
          <div>
            <input type="radio" id="option2" name="question1" value="option2" />
            <label htmlFor="option2" className="ml-2">Option 2</label>
          </div>
          {/* More options */}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400">
          Previous Question
        </button>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          Next Question
        </button>
      </div>

      {/* Submit Quiz Button Placeholder */}
      <div className="mt-8 text-center">
        <button className="bg-green-500 text-white py-2 px-8 rounded-lg text-lg hover:bg-green-600">
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
