
import Map from './Map';
import { ArrowLeft, Footprints, Map as MapIcon, Clock, Flame } from 'lucide-react';

const RunningTracker = () => {
  return (
    <div className="flex justify-center items-center min-h-screen" style={{backgroundColor: '#F8DE7E'}}>
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-4 space-y-4">
        {/* Map Section */}
        <div className="relative">
          <div className="h-64 rounded-2xl overflow-hidden">
            <Map />
          </div>
          <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
            <ArrowLeft size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
            2.03 km
          </div>
        </div>

        {/* Running Section */}
        <div className="bg-black text-white p-4 rounded-2xl flex items-center space-x-4">
          <div className="bg-yellow-400 text-white p-3 rounded-lg">
            <Footprints size={24} />
          </div>
          <div>
            <p className="font-semibold">Running</p>
            <p className="text-sm text-gray-300">3000 meters per day</p>
            <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
              <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '67%' }}></div>
            </div>
          </div>
        </div>

        {/* Today's Stats Section */}
        <div>
          <h2 className="font-bold text-black text-lg mb-2">Today</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-purple-100 p-4 rounded-2xl">
              <MapIcon className="mx-auto text-purple-500" />
              <p className="font-bold mt-1">2.03</p>
              <p className="text-sm text-gray-500">Kilometer</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-2xl">
              <Clock className="mx-auto text-blue-500" />
              <p className="font-bold mt-1">15</p>
              <p className="text-sm text-gray-500">minutes</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-2xl">
              <Flame className="mx-auto text-yellow-500" />
              <p className="font-bold mt-1">75</p>
              <p className="text-sm text-gray-500">Calories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningTracker;
