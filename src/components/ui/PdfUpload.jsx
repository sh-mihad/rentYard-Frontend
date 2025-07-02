
export default function PdfUpload({ name, label, register, required = false,watch  }){
  const selectedFile = watch(name)?.[0];
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1 font-medium text-gray-700 text-xs">
          {label}{required&&"*"}
        </label>
      )}
      <label
        htmlFor={name}
        className="border-dashed border-2 border-gray-300 bg-gray-50 px-4 py-2 rounded-lg flex justify-center items-center space-x-3 text-gray-500 text-sm cursor-pointer"
      >
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m-3-6v.01"
            />
          </svg>
          <span className="text-xs"> {selectedFile ? selectedFile.name : "(PDF only)"}</span>
        </div>
        <input
          id={name}
          type="file"
          accept=".pdf"
          {...register(name, { required })}
          className="hidden"
        />
      </label>
    </div>
  );
};
