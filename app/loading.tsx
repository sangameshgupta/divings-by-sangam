export default function Loading() {
  return (
    <div className="px-6 max-w-7xl mx-auto py-32 animate-pulse">
      <div className="h-12 w-2/3 bg-surface-container-low rounded mb-8" />
      <div className="h-6 w-1/3 bg-surface-container-low rounded mb-4" />
      <div className="h-6 w-1/2 bg-surface-container-low rounded" />
    </div>
  );
}
