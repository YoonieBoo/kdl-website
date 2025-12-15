"use client";

import WireframeImagePlaceholder from "./wireframe-image-placeholder";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      
      {/* TOP IMAGE PLACEHOLDER */}
      <div className="h-44 w-full bg-gray-50">
        <WireframeImagePlaceholder className="h-full w-full" />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-[#0B1C33] leading-snug">
          {course.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {course.description}
        </p>

        <hr className="border-gray-200 my-3" />

        {/* DATE + PRICE */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700">{course.date}</span>
          <span className="font-semibold text-[#0B1C33]">{course.price}</span>
        </div>
      </div>
    </div>
  );
}
