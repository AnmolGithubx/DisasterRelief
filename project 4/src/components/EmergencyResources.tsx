import React from 'react';
import { MapPin, Home, Utensils, Cross, Phone, Clock, AlertCircle } from 'lucide-react';

const EmergencyResources: React.FC = () => {
  const resources = [
    {
      type: 'Shelter',
      name: 'Central Community Center',
      address: '123 Main St, Downtown',
      status: 'Available',
      capacity: '250/400',
      icon: Home,
      statusColor: 'text-green-600'
    },
    {
      type: 'Food Distribution',
      name: 'Red Cross Food Bank',
      address: '456 Relief Ave, Westside',
      status: 'Open',
      capacity: 'Supplies Available',
      icon: Utensils,
      statusColor: 'text-green-600'
    },
    {
      type: 'Medical Aid',
      name: 'Emergency Medical Station',
      address: '789 Health Blvd, Northside',
      status: 'Operating',
      capacity: '24/7 Service',
      icon: Cross,
      statusColor: 'text-green-600'
    },
    {
      type: 'Shelter',
      name: 'Riverside Church',
      address: '321 River Rd, Eastside',
      status: 'Nearly Full',
      capacity: '180/200',
      icon: Home,
      statusColor: 'text-amber-600'
    }
  ];

  return (
    <section id="emergency" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Resources</h2>
          <p className="text-lg text-gray-600">Real-time availability of shelters, food, and medical services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <resource.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                    <p className="text-sm text-gray-600">{resource.type}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${resource.statusColor} bg-gray-100`}>
                  {resource.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{resource.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{resource.capacity}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                Get Directions
              </button>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-md">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-amber-800">Resource Updates</h3>
              <p className="text-sm text-amber-700 mt-1">
                Information is updated every 15 minutes. For immediate assistance, call emergency services at 911.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResources;