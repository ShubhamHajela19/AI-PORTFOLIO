import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Server, 
  Network, 
  Code, 
  Cloud, 
  Database, 
  Tool, 
  Users 
} from 'lucide-react';
import { mockData } from '../data/mock';

const Skills = () => {
  const skillIcons = {
    "Operating Systems": Server,
    "Networking": Network,
    "Programming & Scripting": Code,
    "Cloud Platforms": Cloud,
    "Databases": Database,
    "Tools": Tool,
    "Soft Skills": Users
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across system administration, cloud computing, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(mockData.skills).map(([category, skills], index) => {
            const IconComponent = skillIcons[category] || Code;
            
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <IconComponent size={20} className="text-gray-700" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors text-xs"
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
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Cloud size={40} className="mx-auto mb-4 text-gray-700" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">AWS Expertise</h4>
              <p className="text-gray-600 text-sm">
                Hands-on experience with 10+ AWS services including Lambda, EC2, S3, and DynamoDB
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Server size={40} className="mx-auto mb-4 text-gray-700" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">System Administration</h4>
              <p className="text-gray-600 text-sm">
                Proficient in Linux/Windows environments with automation and scripting capabilities
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Code size={40} className="mx-auto mb-4 text-gray-700" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Full-Stack Development</h4>
              <p className="text-gray-600 text-sm">
                Multi-language programming experience with focus on automation and web applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;