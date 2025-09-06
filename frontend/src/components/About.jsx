import React from 'react';
import { Card, CardContent } from './ui/card';
import { User, Target, Briefcase } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const stats = [
    { label: 'Internships Completed', value: '4+', icon: Briefcase },
    { label: 'AWS Certifications', value: '7+', icon: Target },
    { label: 'Years Experience', value: '2+', icon: User }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Professional Summary
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {mockData.summary}
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <stat.icon className="mx-auto mb-3 text-gray-700" size={32} />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Recent Internships
            </h3>
            {mockData.internships.slice(0, 3).map((internship, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{internship.company}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {internship.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {internship.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;