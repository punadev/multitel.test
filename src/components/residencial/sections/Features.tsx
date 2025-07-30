import React from 'react';
import { Zap, Wifi, Shield, Leaf } from 'lucide-react';
import { features } from '../../constants/data';

const iconComponents = {
  Zap: Zap,
  Wifi: Wifi,
  Shield: Shield,
  Leaf: Leaf,
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Next-Generation <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Internet Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our cutting-edge technology delivers a superior internet experience that traditional providers simply can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconComponents[feature.icon as keyof typeof iconComponents];
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* The speed visualization */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
            <h3 className="text-2xl font-bold">Experience the Speed Difference</h3>
            <p className="opacity-90">See how much faster everyday tasks become with NexusNet</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>4K Movie Download</span>
                  <div className="flex space-x-6">
                    <span>Traditional: 45+ minutes</span>
                    <span className="font-semibold text-indigo-600">NexusNet: &lt;2 minutes</span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute left-0 h-full bg-gray-300 rounded-full" style={{ width: '20%' }}></div>
                  <div className="absolute right-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>100GB Game Download</span>
                  <div className="flex space-x-6">
                    <span>Traditional: 8+ hours</span>
                    <span className="font-semibold text-indigo-600">NexusNet: ~20 minutes</span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute left-0 h-full bg-gray-300 rounded-full" style={{ width: '15%' }}></div>
                  <div className="absolute right-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Video Conference Quality</span>
                  <div className="flex space-x-6">
                    <span>Traditional: Occasional buffering</span>
                    <span className="font-semibold text-indigo-600">NexusNet: Crystal clear</span>
                  </div>
                </div>
                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="absolute left-0 h-full bg-gray-300 rounded-full" style={{ width: '55%' }}></div>
                  <div className="absolute right-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;