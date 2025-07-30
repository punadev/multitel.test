import React from 'react';
import { Radio } from 'lucide-react';

interface SignalIconProps {
  className?: string;
  animated?: boolean;
}

const SignalIcon: React.FC<SignalIconProps> = ({ className = "", animated = true }) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`w-24 h-24 ${animated ? 'animate-float' : ''}`}>
        <Radio 
          size={96}
          strokeWidth={1.5}
          className="text-primary-600"
        />
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-secondary-500 to-transparent opacity-50"></div>
    </div>
  );
};

export default SignalIcon;