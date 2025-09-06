import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Code, Cloud, Bot, Image, Zap, Activity } from 'lucide-react';
import { mockData } from '../data/mock';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projectIcons = {
    "Real-time Chat Application (AWS Serverless)": { icon: Code, color: "from-cyan-500 to-blue-500" },
    "Menu-based Automation Platform": { icon: Cloud, color: "from-blue-500 to-indigo-500" },
    "Hotel Room Booking Chatbot": { icon: Bot, color: "from-purple-500 to-pink-500" },
    "Image Processing Pipeline": { icon: Image, color: "from-green-500 to-emerald-500" }
  };

  const handleProjectLink = (url, type) => {
    if (url === '#') {
      alert(`${type} link will be available soon!`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-mono mb-2">{'> git log --oneline'}</div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in 
            <span className="text-cyan-400"> cloud computing</span>, 
            <span className="text-blue-400"> automation</span>, and 
            <span className="text-purple-400"> full-stack development</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockData.projects.map((project, index) => {
            const { icon: IconComponent, color } = projectIcons[project.title] || { icon: Code, color: "from-gray-500 to-gray-600" };
            
            return (
              <Card 
                key={index} 
                className="bg-gray-800/20 border-gray-700/30 hover:border-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-3 hover:scale-105 backdrop-blur-sm group relative overflow-hidden"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-r ${color} rounded-xl shadow-lg ${hoveredProject === index ? 'animate-pulse scale-110' : ''} transition-all duration-300`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl leading-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Activity size={14} className="text-green-400" />
                          <span className="text-green-400 text-xs font-mono">ACTIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-500/30 hover:text-white transition-all duration-300 text-xs transform hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleProjectLink(project.github, 'GitHub')}
                      className="flex items-center gap-2 bg-gray-800/50 border-gray-600/50 text-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 transform hover:scale-105 group/btn backdrop-blur-sm"
                    >
                      <Github size={16} className="group-hover/btn:animate-spin" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleProjectLink(project.demo, 'Demo')}
                      className="flex items-center gap-2 bg-gray-800/50 border-gray-600/50 text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 hover:border-blue-500/30 hover:text-blue-300 transition-all duration-300 transform hover:scale-105 group/btn backdrop-blur-sm"
                    >
                      <ExternalLink size={16} className="group-hover/btn:animate-bounce" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Stats with Futuristic Design */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Project <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Analytics</span>
            </h3>
            <div className="text-gray-400 text-sm font-mono">Real-time development metrics</div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "Major Projects", value: "4+", icon: Zap, color: "from-cyan-500 to-blue-500", description: "Full-stack applications" },
              { label: "AWS Services", value: "10+", icon: Cloud, color: "from-blue-500 to-indigo-500", description: "Cloud technologies used" },
              { label: "Efficiency Gain", value: "70%", icon: Activity, color: "from-purple-500 to-pink-500", description: "Automation improvement" },
              { label: "Architecture", value: "100%", icon: Code, color: "from-green-500 to-emerald-500", description: "Serverless implementation" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="p-6 bg-gray-800/20 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm transform hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

        {/* Technology Stack Visualization */}
        <div className="mt-20 p-8 bg-gray-800/10 rounded-2xl border border-gray-700/20 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">
              Tech Stack <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Overview</span>
            </h3>
            <div className="text-gray-400 text-sm font-mono">Technologies powering the projects</div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS Lambda", "API Gateway", "DynamoDB", "S3", "Python", "JavaScript", 
              "EC2", "Amazon Lex", "Node.js", "React", "Docker", "Git"
            ].map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-gray-600/30 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm cursor-pointer"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;