import React from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";

export default function ImageUpload({
  name,
  showPlaceholder = false,
  register,
  required = false,
  watch,
  isSmall = false,
}) {
  const selectedFile = watch(name)?.[0];
  return (
    <div className="w-full h-full">
      <label
        htmlFor={name}
        className={`border-dashed border-2 border-[#316EED] bg-[#F6F9FF]  px-10 ${
          !isSmall ? "py-10 space-x-4" : "py-2 pt-5"
        } rounded-lg flex flex-col justify-center items-center  text-gray-500 text-sm cursor-pointer`}
      >
        <div className={`p-2 margin-auto rounded-lg border-dashed border-2 border-[#316EED] `}>
          <FaArrowUpFromBracket
            className={`text-[#272B35] ${isSmall && "text-xs"}`}
          />
        </div>
        {showPlaceholder ? (
          <div className="margin-auto mr-0 text-center my-2 text-[#272B35] font-medium">
            <p className="m-0">Upload Cover Photo</p>
            <span className=" text-xs m-0  my-3">
              {" "}
              {selectedFile ? selectedFile.name.slice(0,20)+"..." : "( jpg, png only )"}
            </span>
          </div>
        ) : (
          <span className="text-xs block h-4 w-7">
            {" "}
            {selectedFile && selectedFile.name.slice(0,5)+"..."}
          </span>
        )}

        <input
          id={name}
          type="file"
          accept="image/*"
          {...register(name, { required })}
          className="hidden"
        />
      </label>
    </div>
  );
}
