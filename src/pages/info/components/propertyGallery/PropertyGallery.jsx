import { useForm } from "react-hook-form";
import SectionCardLayout from "../../../../components/layouts/SectionCardLayouts";
import ImageUpload from "../../../../components/ui/ImageUpload";

export default function PropertyGallery() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <SectionCardLayout
      title={"Property gallery (Its not unit photo)*"}
      isBgRemoveFormHeader={true}
      isHideCheckbox={true}
    >
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5 mb-3 mx-2">
        <div className="">
          <p>
            Featured Photos <span className="text-red-500">*</span>
          </p>
          <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-col-2 lg:grid-cols-4 gap-2 space-y-0 ">
              <div className="col-span-2 row-span-2">
                <ImageUpload
                  name="coverPhoto0"
                  showPlaceholder={true}
                  register={register}
                  required={true}
                  watch={watch}
                />
              </div>
              <ImageUpload
                name="morePhoto1"
                register={register}
                required={true}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto2"
                register={register}
                required={true}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto3"
                register={register}
                required={true}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto4"
                register={register}
                required={true}
                watch={watch}
                isSmall={true}
              />
            </div>
          </form>
        </div>
        <div className="">
          <p>
            More Photos (Optional)
          </p>
          <form className="my-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-col-2 lg:grid-cols-4 gap-2 space-y-0 ">
              <ImageUpload
                name="morePhoto0"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto1"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto2"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto3"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto4"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto5"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto6"
                register={register}
                watch={watch}
                isSmall={true}
              />
              <ImageUpload
                name="morePhoto7"
                register={register}
                watch={watch}
                isSmall={true}
              />
            </div>
          </form>
        </div>
        
      </section>
    </SectionCardLayout>
  );
}
