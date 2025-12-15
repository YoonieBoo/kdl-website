"use client";

export default function WireframeImagePlaceholder({ className = "" }) {
  return (
    <div className={`relative w-full h-full bg-gray-50 ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
