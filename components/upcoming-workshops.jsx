"use client"

import CourseCard from "./course-card"

export default function UpcomingWorkshops() {
  const workshops = [
    {
      id: 1,
      title: "Human Skills for IT Project and Team Management",
      description:
        "Develop essential human skills for IT professionals including teamwork, leadership, and communication.",
      date: "01 December 2025",
      price: "13,000 THB",
      category: "Project Management",
      type: "Classroom",
    },
    {
      id: 2,
      title: "CompTIA Security+ Basic Information Security Professional Standards Workshop",
      description: "CompTIA Security+ is certified by ANSI and aligned with ISO 17024 standards.",
      date: "01 December 2025",
      price: "35,000 THB",
      category: "CompTIA Certification",
      type: "Online",
    },
    {
      id: 3,
      title: "Cyber-Security Technology for IT Pro",
      description:
        "Focus on creating security professionals trained to address threats and risks on network systems.",
      date: "01 December 2025",
      price: "12,000 THB",
      category: "Cyber Security",
      type: "Classroom",
    },
    {
      id: 4,
      title: "IoT Security",
      description:
        "Today, IoT devices are increasingly integrated into our lives and the industrial sector.",
      date: "01 December 2025",
      price: "10,000 THB",
      category: "Security",
      type: "Classroom",
    },
    {
      id: 5,
      title: "Certified Digital Marketing",
      description: "Master the fundamentals and advanced strategies of digital marketing.",
      date: "15 December 2025",
      price: "9,000 THB",
      category: "Digital Marketing",
      type: "Online",
    },
    {
      id: 6,
      title: "Advanced Python Programming",
      description:
        "Learn advanced Python techniques and best practices for professional development.",
      date: "20 December 2025",
      price: "11,000 THB",
      category: "Programming",
      type: "Classroom",
    },
  ]

  return (
    <section
      id="workshops"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-amber-500">Upcoming</span> Courses
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            Upcoming courses, categorized by popularity, gathered here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop) => (
            <CourseCard key={workshop.id} course={workshop} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}
