export default function Loading() {
  return (
    <div className="grid gap-4 p-6">
      <div className="h-40 animate-pulse rounded-3xl bg-zinc-800" />
      <div className="h-32 animate-pulse rounded-3xl bg-zinc-800" />
      <div className="h-32 animate-pulse rounded-3xl bg-zinc-800" />
    </div>
  );
}