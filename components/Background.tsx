import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#18181b_0%,_#000000_100%)]"></div>
      
      {/* Flowing white/gray gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] min-w-[500px] h-[50vw] min-h-[500px] rounded-full bg-white/5 blur-[120px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40vw] min-w-[400px] h-[40vw] min-h-[400px] rounded-full bg-white/5 blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] min-w-[600px] h-[60vw] min-h-[600px] rounded-full bg-white/5 blur-[150px] animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Background;
