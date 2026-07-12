function Loading() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-cyan-400 text-lg font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loading;