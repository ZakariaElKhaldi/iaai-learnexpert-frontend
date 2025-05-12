import React from 'react';

const CourseDetailPage = async ({ params }: { params: { courseId: string } }) => {
  const awaitedParams = await params;
  const { courseId } = awaitedParams;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Course Detail: {courseId}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-grow">
          {/* Course Thumbnail/Preview Video Placeholder */}
          <div className="bg-gray-200 h-64 w-full rounded mb-6"></div>

          {/* Detailed Description Placeholder */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p>Detailed course description goes here.</p>
          </section>

          {/* Learning Objectives Placeholder */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">What You'll Learn</h2>
            <ul className="list-disc list-inside">
              <li>Learning objective 1</li>
              <li>Learning objective 2</li>
              {/* More objectives */}
            </ul>
          </section>

          {/* Course Curriculum Placeholder */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Curriculum</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>Course modules and lessons will be listed here.</p>
            </div>
          </section>

          {/* Instructor Bio Placeholder */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Instructor</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>Instructor bio goes here.</p>
            </div>
          </section>

          {/* Reviews & Ratings Section Placeholder */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Reviews</h2>
            <div className="bg-gray-100 p-4 rounded">
              <p>User reviews and ratings will be displayed here.</p>
            </div>
          </section>
        </div>

        {/* Sidebar/Action Area */}
        <aside className="w-full md:w-80 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Enrollment</h3>
          {/* "Enroll Now" / "Start Learning" Button Placeholder */}
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Enroll Now
          </button>
          {/* Other sidebar info (price, duration, certificate) */}
          <div className="mt-4 text-sm text-gray-700">
            <p>Estimated time: X hours</p>
            <p>Certificate available: Yes</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetailPage;
