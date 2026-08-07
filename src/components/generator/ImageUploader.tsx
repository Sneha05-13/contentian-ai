import { UploadCloud, ImageIcon } from "lucide-react";

interface ImageUploaderProps {
  imagePreview: string | null;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (e: React.MouseEvent) => void;
}

export default function ImageUploader({ imagePreview, handleImageUpload, handleRemoveImage }: ImageUploaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        1. Image (Optional)
      </label>
      <div className="relative group">
        <label htmlFor="image-upload" className={`flex flex-col items-center justify-center w-full h-48 sm:h-56 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 ${imagePreview ? 'border-indigo-300 dark:border-indigo-500/50 bg-indigo-50/50 dark:bg-indigo-500/5' : 'border-zinc-300 dark:border-white/20 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:border-indigo-400 dark:hover:border-indigo-500/50'}`}>
          {imagePreview ? (
            <div className="relative w-full h-full p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imagePreview} alt="Preview" className="w-full h-full object-contain rounded-xl" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex flex-col items-center justify-center gap-3">
                <p className="text-white font-medium flex items-center gap-2">
                  <UploadCloud className="w-5 h-5" /> Change Image
                </p>
                <button
                  onClick={handleRemoveImage}
                  className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
                >
                  Remove Image
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-zinc-500 dark:text-zinc-400">
              <div className="w-12 h-12 mb-3 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
              </div>
              <p className="mb-1 text-sm font-semibold">Upload your image</p>
              <p className="text-xs">PNG, JPG or WEBP (MAX. 5MB)</p>
            </div>
          )}
          <input id="image-upload" type="file" className="hidden" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" onChange={handleImageUpload} />
        </label>
      </div>
    </div>
  );
}
