
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 animate-in fade-in duration-1000">
      <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            HI <span className="text-green-500">THERE</span>.
          </h1>
        <p className="text-green-800 text-lg max-w-xl mx-auto italic font-light">
          "The world is a different place when you see the zeros and ones behind the curtain. We are the architects of the unseen."
        </p>
      </div>

      <div className="relative group w-full max-w-[560px] md:max-w-[640px] mx-auto">
        <div className="absolute -inset-1 bg-green-500 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-black rounded-lg p-2 border border-green-900/30">
            <img
              src="/robot.jpg"
              alt="Terminal Interface"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = '/robot.jpg';
              }}
              className="w-full h-auto object-contain rounded-md opacity-70 group-hover:opacity-90 transition-opacity grayscale hover:grayscale-0 duration-500"
            />
        </div>
        <p className="mt-4 text-[10px] text-green-900 tracking-widest uppercase">
          hint: Autonomous crawlers ignore the noise. They follow the map.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        <div className="p-6 border border-green-900/20 bg-green-950/5 rounded-lg group hover:border-green-500/30 transition-all">
          <h3 className="text-green-400 font-bold mb-2 tracking-widest">WEB</h3>
          <p className="text-sm text-green-800 font-light">
            User input should never be trusted, because it’s often the source of vulnerabilities.
          </p>
        </div>
        <div className="p-6 border border-green-900/20 bg-green-950/5 rounded-lg group hover:border-green-500/30 transition-all">
          <h3 className="text-green-400 font-bold mb-2 tracking-widest">CRYPTO</h3>
          <p className="text-sm text-green-800 font-light">
            If text looks random, it’s probably encoded or encrypted.
          </p>
        </div>
        <div className="p-6 border border-green-900/20 bg-green-950/5 rounded-lg group hover:border-green-500/30 transition-all">
          <h3 className="text-green-400 font-bold mb-2 tracking-widest">FORENSIC</h3>
          <p className="text-sm text-green-800 font-light">
            Files can hide more than you see.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
