
import React from 'react';

const HiddenPage: React.FC = () => {
  const handleDownload = () => {
    // In a real app, this would be a real file.
    // For this demo, we'll download a random hacker-themed image.
    const imageUrl = "/John the Ripper_image.png";
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'TOP_SECRET_PAYLOAD.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center py-12 animate-in slide-in-from-bottom duration-700">
      <div className="w-full text-center mb-12">
        <h1 className="text-5xl font-black text-white mb-2 tracking-tighter italic">ACCESS GRANTED.</h1>
        <div className="h-1 w-32 bg-green-500 mx-auto"></div>
        <p className="mt-4 text-green-400 animate-pulse">Connection established to secure node: /wawimelo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-black/80 border-l-4 border-green-500 p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Payload Discovery</h2>
            <p className="text-green-800 text-sm leading-relaxed mb-6">
              You have successfully navigated the first layer of the defense-in-depth architecture. 
              The ROT13 cipher was merely a gatekeeper. Below is the localized data you were tasked to retrieve.
            </p>
            
            <button
              onClick={handleDownload}
              className="w-full py-4 px-6 bg-green-600 text-black font-bold rounded hover:bg-green-400 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              DOWNLOAD DATA.JPG
            </button>
          </div>

          <div className="bg-green-900/10 border border-green-900/30 p-4 rounded text-xs text-green-900">
            <h4 className="font-bold mb-2">SYSTEM LOGS:</h4>
            <div className="space-y-1">
              <p>[09:24:12] Path resolution: /wawimelo confirmed</p>
              <p>[09:24:13] Identity verification: SUCCESS</p>
              <p>The metadata often tells more than the image itself...</p>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg border-2 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          <img 
            src="public/John the Ripper_image.png" 
            alt="Secret Intelligence" 
            className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] text-green-500/50 block mb-1">DATASTREAM #941</span>
            <div className="flex justify-between items-end">
              <span className="text-white font-bold text-xs">ENCRYPTED_ASSET_01.RAW</span>
              <span className="text-green-500 text-[10px]">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenPage;
