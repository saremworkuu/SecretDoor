
import React, { useEffect } from 'react';

const RobotsTxt: React.FC = () => {
  useEffect(() => {
    // Scroll to top just in case
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-[50vh] p-8 font-mono text-white rounded-lg border border-gray-800 shadow-2xl">
      <div className="mb-4 text-gray-500"># robots.txt for Project WAWI</div>
      <div className="mb-4">
        <span className="text-blue-400">User-agent:</span> *
      </div>
      <div>
        <span className="text-red-400">Disallow:</span> <span className="underline decoration-dotted cursor-help" title="Maybe rotate this 13 times?">/jnjv</span>
      </div>
      
      <div className="mt-20 text-[10px] text-gray-800 select-none">
        Wait... did you really think it would be that easy? 
        j-n-j-v ... apply the offset.
      </div>
    </div>
  );
};

export default RobotsTxt;
