function ErrorMessage({ message }) {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-6 py-4">

        <h2 className="text-red-400 font-semibold">
          Something went wrong
        </h2>

        <p className="text-gray-300 mt-2">
          {message}
        </p>

      </div>
    </div>
  );
}

export default ErrorMessage;