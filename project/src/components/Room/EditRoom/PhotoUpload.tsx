import React, { useRef } from 'react';
import { Camera, Upload } from 'lucide-react';

interface PhotoUploadProps {
  onUpload: (files: FileList) => void;
}

export function PhotoUpload({ onUpload }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onUpload(files);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center gap-2 px-4 py-2 text-[#DDA76A] border-2 border-[#DDA76A] rounded-lg hover:bg-[#DDA76A] hover:text-white transition-colors"
        >
          <Upload size={20} />
          <span>Upload de Fotos</span>
        </button>
        <button
          type="button"
          onClick={() => {/* Implement camera access */}}
          className="flex items-center gap-2 px-4 py-2 text-[#DDA76A] border-2 border-[#DDA76A] rounded-lg hover:bg-[#DDA76A] hover:text-white transition-colors"
        >
          <Camera size={20} />
          <span>Tirar Foto</span>
        </button>
      </div>
    </div>
  );
}