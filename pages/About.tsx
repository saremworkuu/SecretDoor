
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-12">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-white border-b border-green-900/50 pb-2 flex items-center gap-3">
          <span className="text-green-500">#</span> THE MANIFESTO
        </h2>
        <div className="bg-black/40 p-6 rounded border border-green-900/20 italic text-green-400/80 leading-relaxed font-light">
          "Control is an illusion. You think you're using the computer, but the computer is using you. Break the loop. Input the unexpected. If it's compiled, it's vulnerable."
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Hacker Logic</h3>
          <div className="font-mono text-xs bg-black p-4 rounded border border-green-900/30 text-green-600 space-y-2">
            <p className="text-white">// How to fix any bug:</p>
            <p>while(alive) &#123;</p>
            <p className="pl-4">try &#123; hack(); &#125;</p>
            <p className="pl-4">catch(coffeeError) &#123; refill(); &#125;</p>
            <p>&#125;</p>
          </div>
          <div className="bg-green-950/10 p-4 border-l-2 border-green-500">
            <p className="text-sm text-green-700 font-medium">
              "I'm not a hacker. I'm just very curious about why your security is so polite."
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Wisdom.sh</h3>
          <ul className="space-y-3 text-sm text-green-800 italic">
            <li className="flex gap-2">
              <span className="text-green-500">{'>'}&nbsp;</span>
              "There is no cloud, just someone else's computer."
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">{'>'}&nbsp;</span>
              "My other computer is your computer."
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">{'>'}&nbsp;</span>
              "Real hackers don't use 'Admin'. They use 'root'."
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">{'>'}&nbsp;</span>
              "Password strength: 123456 is still the world champion."
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold text-white uppercase tracking-wider">Operational Notes</h3>
        <div className="prose prose-invert prose-green text-sm max-w-none">
          <div className="bg-green-950/20 p-6 rounded-lg border border-green-900/30 font-mono">
            <p className="text-green-400 mb-2 underline">MISSION_PARAMETERS.LOG</p>
            <ul className="list-none p-0 m-0 space-y-2 text-green-800">
              <li>[!] RECON: Observe standard protocols (RFC 2616).</li>
              <li>[!] MOTIVATION: If at first you don't succeed, call it version 1.0.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-center pt-8 opacity-20">
        <pre className="text-[8px] text-green-500 leading-[6px]">
{`          .----.
       _.'__    \`.
   .--($)($$)---/#\\
 .' @          /###\\
 :         ,   #####
  \`-..__.-' _.-\###/
        \`;_:    \`"'
      .'"""""\`.
     /,  SUDO  ,\\
    //  HACKER  \\\\
    \`-._______.-'
     ___\`. | .'_
    (____.'|'____)`}
        </pre>
      </div>
    </div>
  );
};

export default About;
