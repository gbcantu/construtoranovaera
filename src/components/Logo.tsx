import React from 'react';
import { Building2 } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Building2 className="w-8 h-8 text-yellow-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full" />
      </div>
      <div className="font-bold leading-none">
        <div className="text-xl">NOVA</div>
        <div className="text-yellow-500">ERA</div>
      </div>
    </div>
  );
};