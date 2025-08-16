import React from 'react';
import { Heart, DollarSign, Package, Users, TrendingUp } from 'lucide-react';

const DonationTracking: React.FC = () => {
  const stats = [
    { label: 'Total Donations', value: '$2,847,650', icon: DollarSign, color: 'text-green-600' },
    { label: 'Supplies Donated', value: '45,230', icon: Package, color: 'text-blue-600' },
    { label: 'Donors This Month', value: '3,421', icon: Users, color: 'text-purple-600' },
    { label: 'Families Helped', value: '12,850', icon: Heart, color: 'text-red-600' }
  ];

  const recentDonations = [
    { donor: 'Anonymous', amount: '$5,000', type: 'Cash', time: '2 minutes ago' },
    { donor: 'Local Business Group', amount: '50 boxes', type: 'Food Supplies', time: '15 minutes ago' },
    { donor: 'Community Center', amount: '$1,200', type: 'Cash', time: '1 hour ago' },
    { donor: 'Healthcare Workers Union', amount: 'Medical supplies', type: 'Equipment', time: '2 hours ago' }
  ];

  return (
    <section id="donate" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Donation Impact Tracking</h2>
          <p className="text-lg text-gray-600">See how your contributions are making a real difference</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Progress Chart */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Funding Progress</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Emergency Shelter</span>
                  <span className="text-sm text-gray-600">$450K / $500K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Food Distribution</span>
                  <span className="text-sm text-gray-600">$280K / $400K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Medical Supplies</span>
                  <span className="text-sm text-gray-600">$180K / $300K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-red-600 h-3 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Transportation</span>
                  <span className="text-sm text-gray-600">$75K / $200K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-amber-600 h-3 rounded-full" style={{ width: '37.5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Donations</h3>
            
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{donation.donor}</p>
                    <p className="text-sm text-gray-600">{donation.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">{donation.amount}</p>
                    <p className="text-xs text-gray-500">{donation.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                <span>Donations increased 45% this week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Buttons */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Donate Money
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Donate Supplies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationTracking;