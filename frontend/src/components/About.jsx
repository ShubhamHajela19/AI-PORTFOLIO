import React from 'react';
import { Card, CardContent } from './ui/card';
import { User, Target, Briefcase, Cpu, CloudLightning, Terminal } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const stats = [
    { label: 'Internships Completed', value: '4+', icon: Briefcase, color: 'from-cyan-400 to-blue-500' },
    { label: 'AWS Certifications', value: '7+', icon: Target, color: 'from-blue-500 to-purple-500' },
    { label: 'Years Experience', value: '2+', icon: User, color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'> cat about.txt'}</div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                  <Terminal className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Professional Summary
                </h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {mockData.summary}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-2 group backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg mx-auto mb-3 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="text-white" size={28} />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                <CloudLightning className="text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Recent Internships
              </h3>
            </div>
            
            {mockData.internships.slice(0, 3).map((internship, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1 group backdrop-blur-sm glow-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {internship.company}
                    </h4>
                    <span className="text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600/50 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      {internship.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm group">
              <Cpu size={48} className="mx-auto mb-4 text-cyan-400 group-hover:animate-pulse" />
              <h4 className="text-lg font-semibold text-white mb-2">System Architecture</h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Linux/Windows environments with automation and scripting capabilities
              </p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm group">
              <CloudLightning size={48} className="mx-auto mb-4 text-blue-400 group-hover:animate-pulse" />
              <h4 className="text-lg font-semibold text-white mb-2">Cloud Computing</h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                10+ AWS services including Lambda, EC2, S3, and DynamoDB
              </p>
            </div>
            <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm group">
              <Terminal size={48} className="mx-auto mb-4 text-purple-400 group-hover:animate-pulse" />
              <h4 className="text-lg font-semibold text-white mb-2">Full-Stack Development</h4>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Multi-language programming with focus on automation and web applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;