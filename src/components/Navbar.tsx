import React from 'react';
import { Trophy, User, HelpCircle, Compass } from 'lucide-react';

interface NavbarProps {
  onLeaderboardClick: () => void;
}

export default function Navbar({ onLeaderboardClick }: NavbarProps) {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3 group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-bold">Campus Quest</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button onClick={onLeaderboardClick} className="nav-btn group">
              <Trophy className="w-5 h-5" />
              <span className="nav-tooltip">Leaderboard</span>
            </button>
            
            <button className="nav-btn group">
              <HelpCircle className="w-5 h-5" />
              <span className="nav-tooltip">Help</span>
            </button>
            
            <button className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all hover:scale-105">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}