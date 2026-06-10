import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";
import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
        >
          <HeroCard />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon_name={course.icon_name}
            />
          ))}

          <ActivityCard />
        </div>
      </section>
    </main>
  );
}