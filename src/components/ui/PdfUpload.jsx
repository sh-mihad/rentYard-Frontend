import pdfUploadSvg from "../../assets/upload-02.svg"
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
         <img className="w-6 h-6" src={pdfUploadSvg} alt="pdf upload icon" />
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
