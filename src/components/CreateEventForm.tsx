import React from 'react';
import { Calendar, Clock, MapPin, Image, Lightbulb, PlusCircle, Sparkles } from 'lucide-react';

export default function CreateEventForm() {
  return (
    <div className="game-card p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Sparkles className="w-7 h-7 text-yellow-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Create Adventure
        </h2>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-indigo-600 mb-1">Quest Name</label>
          <input
            type="text"
            className="block w-full rounded-lg border-2 border-indigo-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
            placeholder="Name your adventure..."
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold text-indigo-600 mb-1">Quest Description</label>
          <textarea
            rows={3}
            className="block w-full rounded-lg border-2 border-indigo-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
            placeholder="Describe the exciting journey..."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-indigo-600 mb-1">Start Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
              <input
                type="datetime-local"
                className="block w-full pl-10 rounded-lg border-2 border-indigo-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-indigo-600 mb-1">End Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
              <input
                type="datetime-local"
                className="block w-full pl-10 rounded-lg border-2 border-indigo-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-bold text-indigo-600 mb-1">Quest Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
            <input
              type="text"
              className="block w-full pl-10 rounded-lg border-2 border-indigo-100 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
              placeholder="Choose your battleground..."
            />
          </div>
          <div className="mt-2 h-48 bg-indigo-50 rounded-lg border-2 border-dashed border-indigo-200 hover:border-indigo-300 transition-colors">
            <div className="h-full flex items-center justify-center text-indigo-400">
              Click to set quest location
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <button
            type="button"
            className="fun-button flex items-center space-x-2 text-indigo-600 hover:text-indigo-500 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg w-full"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Challenge</span>
          </button>
          
          <button
            type="button"
            className="fun-button flex items-center space-x-2 text-indigo-600 hover:text-indigo-500 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg w-full"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Add Hint</span>
          </button>
          
          <button
            type="button"
            className="fun-button flex items-center space-x-2 text-indigo-600 hover:text-indigo-500 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-lg w-full"
          >
            <Image className="w-5 h-5" />
            <span>Add Photo Task</span>
          </button>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="fun-button w-full py-3 px-4 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            🚀 Launch Adventure!
          </button>
        </div>
      </form>
    </div>
  );
}