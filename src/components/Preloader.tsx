import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-100 dark:bg-darkBg-base"
        >
          {/* Central Animated Greeting Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            {/* Avatar with Waving Hand saying Hi */}
            <div className="relative">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-amberAccent shadow-xl shadow-amberAccent/30 bg-cream-200">
                <img
                  src="/shirin-real.jpg"
                  alt="Shirin avatar"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>

              {/* Energetic waving hand */}
              <motion.span
                animate={{ rotate: [0, 28, -18, 28, -12, 22, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 text-4xl select-none origin-bottom-right filter drop-shadow-md"
              >
                👋
              </motion.span>
            </div>

            <div className="text-center space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display font-bold text-charcoal-900 dark:text-cream-100 text-2xl tracking-wide flex items-center justify-center gap-2"
              >
                <span>Hi! I'm Shirin</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-script text-2xl text-charcoal-700 dark:text-cream-300 font-bold"
              >
                Be curious today :)
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

