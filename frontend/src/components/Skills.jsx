import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Server, 
  Network, 
  Code, 
  Cloud, 
  Database, 
  Wrench, 
  Users,
  Zap
} from 'lucide-react';
import { mockData } from '../data/mock';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillIcons = {
    "Operating Systems": { icon: Server, color: "from-red-500 to-orange-500" },
    "Networking": { icon: Network, color: "from-green-500 to-emerald-500" },
    "Programming & Scripting": { icon: Code, color: "from-blue-500 to-indigo-500" },
    "Cloud Platforms": { icon: Cloud, color: "from-cyan-500 to-blue-500" },
    "Databases": { icon: Database, color: "from-purple-500 to-pink-500" },
    "Tools": { icon: Wrench, color: "from-yellow-500 to-orange-500" },
    "Soft Skills": { icon: Users, color: "from-indigo-500 to-purple-500" }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'> ls -la /skills'}</div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across system administration, cloud computing, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(mockData.skills).map(([category, skills], index) => {
            const { icon: IconComponent, color } = skillIcons[category] || { icon: Code, color: "from-gray-500 to-gray-600" };
            
            return (
              <Card 
                key={index} 
                className="bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2 backdrop-blur-sm glow-border group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className={`p-3 bg-gradient-to-r ${color} rounded-lg shadow-lg ${hoveredCard === index ? 'animate-pulse' : ''}`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <span className="text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/30 hover:text-white transition-all duration-300 text-xs transform hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Highlights */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-12">
            Key <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Strengths</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm group transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cloud size={48} className="text-cyan-400 group-hover:animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                AWS Expertise
              </h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Hands-on experience with 10+ AWS services including Lambda, EC2, S3, and DynamoDB
              </p>
            </div>
            
            <div className="p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm group transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server size={48} className="text-blue-400 group-hover:animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                System Administration
              </h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Proficient in Linux/Windows environments with automation and scripting capabilities
              </p>
            </div>
            
            <div className="p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm group transform hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap size={48} className="text-purple-400 group-hover:animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                Automation & Efficiency
              </h4>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Automated workflows reducing manual effort by 70% with Python scripting and cloud integration
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Skills Meter */}
        <div className="mt-20 p-8 bg-gray-800/20 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">Proficiency Overview</h3>
            <p className="text-gray-400">Years of experience and expertise level</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "AWS Cloud", level: 85, color: "from-orange-500 to-red-500" },
              { skill: "Linux/Windows", level: 90, color: "from-green-500 to-emerald-500" },
              { skill: "Python", level: 80, color: "from-blue-500 to-indigo-500" },
              { skill: "System Admin", level: 88, color: "from-purple-500 to-pink-500" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-white font-semibold mb-2">{item.skill}</div>
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-700"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      className={`bg-gradient-to-r ${item.color}`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;