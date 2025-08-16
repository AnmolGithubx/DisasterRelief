import React from 'react';
import { AlertTriangle, MapPin, Heart, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AlertTriangle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Disaster Relief Coordination
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Connecting communities, volunteers, and resources during times of crisis. 
            Get help, offer support, and stay informed in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <button className="bg-red-600 hover:bg-red-700 p-6 rounded-lg transition-colors group">
            <AlertTriangle className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">URGENT HELP</h3>
            <p className="text-sm text-red-100">Request immediate assistance</p>
          </button>

          <button className="bg-green-600 hover:bg-green-700 p-6 rounded-lg transition-colors group">
            <Users className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">VOLUNTEER</h3>
            <p className="text-sm text-green-100">Join relief efforts</p>
          </button>

          <button className="bg-amber-600 hover:bg-amber-700 p-6 rounded-lg transition-colors group">
            <Heart className="h-10 w-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">DONATE</h3>
            <p className="text-sm text-amber-100">Support relief efforts</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;