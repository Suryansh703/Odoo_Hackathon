function EmptyState({ title }) {
  return (
    <div className="flex flex-col items-center justify-center h-64">

      <h2 className="text-3xl mb-3">📦</h2>

      <p className="text-xl text-white">
        No {title} Found
      </p>

      <p className="text-gray-400 mt-2">
        Data will appear here once available.
      </p>

    </div>
  );
}

export default EmptyState;