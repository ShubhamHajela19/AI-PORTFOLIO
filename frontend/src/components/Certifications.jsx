import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Calendar, Building, Shield, Star, Zap } from 'lucide-react';
import { mockData } from '../data/mock';

const Certifications = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificationCategories = {
    "AWS": { color: "from-orange-500 to-red-500", icon: Shield },
    "Programming": { color: "from-blue-500 to-indigo-500", icon: Star },
    "Development": { color: "from-green-500 to-emerald-500", icon: Zap },
    "Default": { color: "from-purple-500 to-pink-500", icon: Award }
  };

  const getCertCategory = (certName) => {
    if (certName.toLowerCase().includes('aws')) return "AWS";
    if (certName.toLowerCase().includes('java') || certName.toLowerCase().includes('programming')) return "Programming";
    if (certName.toLowerCase().includes('frontend') || certName.toLowerCase().includes('development')) return "Development";
    return "Default";
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'> ls -la /certificates/'}</div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional certifications and specialized training programs that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.certifications.map((cert, index) => {
            const category = getCertCategory(cert.name);
            const { color, icon: IconComponent } = certificationCategories[category];
            
            return (
              <Card 
                key={index} 
                className="bg-gray-800/20 border-gray-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-3 hover:scale-105 backdrop-blur-sm group relative overflow-hidden"
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${color} rounded-xl flex-shrink-0 shadow-lg ${hoveredCert === index ? 'animate-pulse scale-110' : ''} transition-all duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                        {cert.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">
                        <Building size={14} className="text-gray-400" />
                        <span className="leading-tight">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-cyan-400" />
                          <Badge className={`bg-gradient-to-r ${color} text-white text-xs border-0 hover:shadow-lg transition-all duration-300`}>
                            {cert.year}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-400 font-mono bg-gray-700/30 px-2 py-1 rounded group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all duration-300">
                          VERIFIED
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certification Stats with Futuristic Design */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Certification <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Analytics</span>
            </h3>
            <div className="text-gray-400 text-sm font-mono">Professional development metrics</div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Total Certifications", value: "7+", icon: Award, color: "from-cyan-500 to-blue-500", description: "Professional credentials" },
              { label: "AWS Related", value: "3", icon: Shield, color: "from-orange-500 to-red-500", description: "Cloud expertise" },
              { label: "Programming", value: "2", icon: Star, color: "from-blue-500 to-indigo-500", description: "Development skills" },
              { label: "Recent Year", value: "2024", icon: Zap, color: "from-purple-500 to-pink-500", description: "Continuous learning" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon size={32} className="text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Categories */}
        <div className="mt-20 p-8 bg-gray-800/10 rounded-2xl border border-gray-700/20 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Expertise <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Areas</span>
            </h3>
            <div className="text-gray-400 text-sm font-mono">Certified competencies and specializations</div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(certificationCategories).filter(([key]) => key !== "Default").map(([category, { color, icon: IconComponent }], index) => (
              <div key={index} className="group">
                <div className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm text-center transform hover:-translate-y-1">
                  <div className={`p-4 bg-gradient-to-r ${color} rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {category}
                  </h4>
                  <div className={`text-sm bg-gradient-to-r ${color} bg-clip-text text-transparent font-medium`}>
                    {category === "AWS" ? "Cloud Computing" : 
                     category === "Programming" ? "Software Development" :
                     category === "Development" ? "Web Technologies" : "General"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-20 text-center">
          <div className="p-8 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Continuous <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Learning</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Staying ahead in technology requires constant learning. These certifications represent my commitment to 
              <span className="text-cyan-400"> professional growth</span>, 
              <span className="text-blue-400"> technical excellence</span>, and 
              <span className="text-purple-400"> industry best practices</span>. 
              Ready to bring this knowledge to your team! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;