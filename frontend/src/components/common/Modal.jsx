function Modal({ isOpen, title, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-[#08101F] border border-cyan-500/30 rounded-3xl w-[600px] max-w-[90%] shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-cyan-500/20">

          <h2 className="text-2xl font-bold text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 text-2xl"
          >
            ✕
          </button>

        </div>

        {/* Body */}
        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Modal;