import React, { useRef } from 'react';
import { Camera } from 'lucide-react';

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
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500"
      >
        <Camera size={20} />
        <span>Adicionar Fotos</span>
      </button>
    </div>
  );
}