import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Calendar, Award, BookOpen, Trophy, Target } from 'lucide-react';
import { mockData } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'> cat education.log'}</div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Building a strong foundation in Computer Science with focus on practical applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {mockData.education.map((edu, index) => (
            <Card key={index} className="bg-gray-800/20 border-gray-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2 backdrop-blur-sm group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap size={32} className="text-cyan-400 group-hover:animate-pulse" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-300 mb-3 group-hover:text-gray-200 transition-colors duration-300">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-700/30 px-4 py-2 rounded-full border border-gray-600/30 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                        <Calendar size={16} className="text-cyan-400" />
                        {edu.duration || edu.year}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {edu.cgpa && (
                        <div className="flex items-center gap-2 text-green-300 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-4 py-2 rounded-full border border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                          <Award size={16} />
                          <span className="text-sm font-medium">CGPA: {edu.cgpa}</span>
                        </div>
                      )}
                      
                      {edu.percentage && (
                        <div className="flex items-center gap-2 text-blue-300 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 px-4 py-2 rounded-full border border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                          <Trophy size={16} />
                          <span className="text-sm font-medium">{edu.percentage}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Highlights with Futuristic Design */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Highlights</span>
            </h3>
            <div className="text-gray-400 text-sm font-mono">Performance metrics and achievements</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="p-8 bg-gray-800/20 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award size={48} className="text-green-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                  Current CGPA
                </h4>
                <p className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3 group-hover:animate-pulse">
                  7.81
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  5th Semester Performance
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="p-8 bg-gray-800/20 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen size={48} className="text-blue-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  Specialization
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Computer Science & Engineering with focus on 
                  <span className="text-cyan-400"> System Administration</span> and 
                  <span className="text-blue-400"> Cloud Computing</span>
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="p-8 bg-gray-800/20 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target size={48} className="text-purple-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  Expected Graduation
                </h4>
                <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:animate-pulse">
                  2026
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  B.Tech Completion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Progress Timeline */}
        <div className="mt-20 p-8 bg-gray-800/10 rounded-2xl border border-gray-700/20 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Academic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Timeline</span>
            </h3>
            <div className="text-gray-400 text-sm font-mono">Educational journey progression</div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {[
              { year: "2020", event: "Class 10th", score: "85.6%", color: "from-green-500 to-emerald-500" },
              { year: "2022", event: "Class 12th", score: "71.6%", color: "from-blue-500 to-indigo-500" },
              { year: "2022-26", event: "B.Tech CSE", score: "7.81 CGPA", color: "from-purple-500 to-pink-500" },
              { year: "2026", event: "Graduation", score: "Expected", color: "from-cyan-500 to-blue-500" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.event}
                  </div>
                  <div className={`text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-medium`}>
                    {item.score}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 top-8 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;