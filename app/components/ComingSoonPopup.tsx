"use client";

import Image from "next/image";

interface PopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ComingSoonPopup({ open, onClose }: PopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-4 rounded-xl shadow-xl relative max-w-xs">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        <Image
          src="/comingsoon.png"
          alt="Coming Soon"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
