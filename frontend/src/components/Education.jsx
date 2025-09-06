import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { mockData } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {mockData.education.map((edu, index) => (
            <Card key={index} className="mb-6 hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-gray-100 rounded-lg flex-shrink-0">
                    <GraduationCap size={24} className="text-gray-700" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={16} />
                        {edu.duration || edu.year}
                      </div>
                    </div>
                    
                    {edu.cgpa && (
                      <div className="flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1 rounded-full w-fit">
                        <Award size={16} />
                        <span className="text-sm font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    
                    {edu.percentage && (
                      <div className="flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-1 rounded-full w-fit">
                        <Award size={16} />
                        <span className="text-sm font-medium">{edu.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Award size={40} className="mx-auto mb-4 text-gray-700" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Current CGPA</h4>
              <p className="text-2xl font-bold text-green-600 mb-2">7.81</p>
              <p className="text-gray-600 text-sm">5th Semester Performance</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <GraduationCap size={40} className="mx-auto mb-4 text-gray-700" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Specialization</h4>
              <p className="text-gray-600 text-sm">
                Computer Science & Engineering with focus on System Administration and Cloud Computing
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Calendar size={40} className="mx-auto mb-4 text-gray-700" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expected Graduation</h4>
              <p className="text-2xl font-bold text-blue-600 mb-2">2026</p>
              <p className="text-gray-600 text-sm">B.Tech Completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;