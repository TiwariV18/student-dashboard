export default function ActivityCard() {
  return (
    <article className="rounded-3xl bg-zinc-900 p-6">
      <h2 className="mb-4">Activity</h2>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="h-4 w-4 rounded bg-green-500/50"
          />
        ))}
      </div>
    </article>
  );
}