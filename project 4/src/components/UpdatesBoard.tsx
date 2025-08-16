import React from 'react';
import { Clock, AlertTriangle, CheckCircle, Info, ExternalLink } from 'lucide-react';

const UpdatesBoard: React.FC = () => {
  const updates = [
    {
      id: 1,
      type: 'critical',
      title: 'Flash Flood Warning Extended',
      message: 'The National Weather Service has extended the flash flood warning for downtown area until 8 PM tonight. Avoid low-lying roads.',
      time: '15 minutes ago',
      source: 'National Weather Service',
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'success',
      title: 'New Shelter Opened',
      message: 'Pine Valley High School is now open as an emergency shelter with capacity for 300 people. Hot meals and medical care available.',
      time: '45 minutes ago',
      source: 'Emergency Management',
      icon: CheckCircle
    },
    {
      id: 3,
      type: 'info',
      title: 'Road Closure Update',
      message: 'Highway 101 between exits 15-18 remains closed due to flooding. Use alternate Route 66 for north-south travel.',
      time: '1 hour ago',
      source: 'Transportation Dept',
      icon: Info
    },
    {
      id: 4,
      type: 'success',
      title: 'Water Distribution Point',
      message: 'Free bottled water available at City Park pavilion. 1 case per family. Distribution from 9 AM - 6 PM daily.',
      time: '2 hours ago',
      source: 'Red Cross',
      icon: CheckCircle
    },
    {
      id: 5,
      type: 'critical',
      title: 'Boil Water Advisory',
      message: 'All residents in ZIP codes 12345, 12346 must boil water for 3 minutes before drinking due to possible contamination.',
      time: '3 hours ago',
      source: 'Health Department',
      icon: AlertTriangle
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-red-500 bg-red-50';
      case 'success':
        return 'border-green-500 bg-green-50';
      case 'info':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-600';
      case 'success':
        return 'text-green-600';
      case 'info':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section id="updates" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Updates</h2>
          <p className="text-lg text-gray-600">Real-time information and emergency alerts</p>
        </div>

        <div className="space-y-4 mb-8">
          {updates.map((update) => (
            <div key={update.id} className={`border-l-4 rounded-lg p-6 ${getTypeStyles(update.type)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <update.icon className={`h-6 w-6 mt-1 ${getIconColor(update.type)}`} />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
                    <p className="text-gray-700 mb-3">{update.message}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{update.source}</span>
                      <span>{update.time}</span>
                    </div>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">SMS Alerts</h4>
              <p className="text-sm text-blue-700 mb-3">Get emergency updates via text message</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Subscribe
              </button>
            </div>
            
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Email Updates</h4>
              <p className="text-sm text-green-700 mb-3">Receive detailed updates in your inbox</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Sign Up
              </button>
            </div>
            
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <h4 className="font-medium text-amber-900 mb-2">Mobile App</h4>
              <p className="text-sm text-amber-700 mb-3">Download our emergency response app</p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesBoard;