import React from 'react';
import { Download, Shield, AlertTriangle, CheckCircle, Code, Server, Database, FileSearch, Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold">WAYMAP</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#usage" className="hover:text-purple-400 transition-colors">Usage</a>
          <a href="#changelog" className="hover:text-purple-400 transition-colors">Changelog</a>
          <a href="#download" className="hover:text-purple-400 transition-colors">Download</a>
        </div>
        <a 
          href="#download" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Download v6.1.8</span>
        </a>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://waymap.yashk.app/images/waymap.jpg" 
            alt="Waymap Logo" 
            className="h-20 w-20 mx-auto mb-6 rounded-full" 
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Web-Application Vulnerability Scanner</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            A fast and optimized web vulnerability scanner designed to identify security flaws in web applications.
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-10">
            Developed by <a href="https://github.com/Trixsec" className="text-purple-400 hover:text-purple-300">Trix Cyrus</a> 
            &nbsp;and contributed by <a href="https://github.com/0day-Yash" className="text-purple-400 hover:text-purple-300">Yash Kulkarni</a>
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="#download" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md flex items-center justify-center space-x-2 transition-colors text-lg"
            >
              <Download className="h-5 w-5" />
              <span>Download Waymap</span>
            </a>
            <a 
              href="#features" 
              className="bg-transparent border border-purple-600 hover:bg-purple-900/30 text-white px-8 py-3 rounded-md transition-colors text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Comprehensive Security Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<AlertTriangle className="h-10 w-10 text-red-500" />}
              title="Injection Vulnerabilities"
              description="Detects SQL Injections, XSS, LFI, Command Injection, SSTI, Open Redirects, CRLF, and CORS vulnerabilities."
            />
            <FeatureCard 
              icon={<Server className="h-10 w-10 text-blue-500" />}
              title="WAF/IPS Detection"
              description="Supports detection of more than 165 Web Application Firewalls and Intrusion Prevention Systems within seconds."
            />
            <FeatureCard 
              icon={<Code className="h-10 w-10 text-green-500" />}
              title="Headers Deepscan"
              description="Analyzes security headers including CSP, HSTS, X-Frame-Options, and identifies misconfigurations."
            />
            <FeatureCard 
              icon={<FileSearch className="h-10 w-10 text-yellow-500" />}
              description="Scans for backup files, exposed directories, and sensitive files that may lead to information leakage."
              title="Backup & Directory Scanning"
            />
            <FeatureCard 
              icon={<Database className="h-10 w-10 text-purple-500" />}
              title="JavaScript Vulnerability Scanner"
              description="Identifies vulnerable JavaScript libraries by checking versions against a database of known vulnerabilities."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-10 w-10 text-teal-500" />}
              title="Customizable Scanning"
              description="Supports multiple scan profiles (High-Risk, Deepscan, Critical-Risk) with customizable threading settings."
            />
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section id="usage" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How to Use Waymap</h2>
          
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <pre className="text-purple-400 text-center text-sm md:text-base overflow-x-auto">
{`░██╗░░░░░░░██╗░█████╗░██╗░░░██╗███╗░░░███╗░█████╗░██████╗░
░██║░░██╗░░██║██╔══██╗╚██╗░██╔╝████╗░████║██╔══██╗██╔══██╗
░╚██╗████╗██╔╝███████║░╚████╔╝░██╔████╔██║███████║██████╔╝
░░████╔═████║░██╔══██║░░╚██╔╝░░██║╚██╔╝██║██╔══██║██╔═══╝░
░░╚██╔╝░╚██╔╝░██║░░██║░░░██║░░░██║░╚═╝░██║██║░░██║██║░░░░░
░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░░░░`}
            </pre>
            <p className="text-center text-gray-300 mt-2">Fastest And Optimised Web Vulnerability Scanner v6.1.8</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto">
            <code className="text-sm md:text-base text-gray-300">
              {`usage: waymap.py [-h] [--target TARGET] [--multi-target MULTI_TARGET] [--crawl CRAWL]
                 [--scan {sqli,cmdi,ssti,xss,lfi,open-redirect,crlf,cors,all,high-risk,critical-risk}] [--threads THREADS]
                 [--no-prompt] [--profile {high-risk,deepscan,critical-risk}] [--check-waf CHECK_WAF]

Waymap - Fast and Optimized Web Vulnerability Scanner

options:
  -h, --help            show this help message and exit
  --target TARGET, -t TARGET
                        Target URL for crawling and scanning, example: https://example.com/
  --multi-target MULTI_TARGET, -mt MULTI_TARGET
                        File with multiple target URLs for crawling and scanning
  --crawl CRAWL, -c CRAWL
                        Crawl depth
  --scan/-s {sqli,cmdi,ssti,xss,lfi,open-redirect,crlf,cors,all},
                        Type of scan to perform
  --threads THREADS, -T THREADS
                        Number of threads to use for scanning (default: 1)
  --no-prompt, -np      Automatically use default input for prompts
  --profile/-p {high-risk,deepscan,critical-risk}
                        Specify the profile: 'high-risk', 'deepscan' or 'critical-risk'. This skips crawling.
  --check-waf CHECK_WAF, --waf CHECK_WAF
                        To Detect WAF/IPS Of Any Website`}
            </code>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">For more detailed usage information, visit the README file.</p>
            <a 
              href="https://github.com/TrixSec/waymap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View Documentation on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section id="changelog" className="py-16 md:py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What's New in Waymap 6.1.8</h2>
          
          <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-lg p-8 border border-purple-800/30">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                <span className="text-xl font-bold">6.1.8</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Latest Stable Release</h3>
                <p className="text-gray-400">Released June 2024</p>
              </div>
            </div>
            
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Enhanced WAF/IPS detection with support for 165+ systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Improved JavaScript vulnerability scanning with expanded database</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Added new security header checks in Deepscan profile</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Performance optimizations for faster scanning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Bug fixes and stability improvements</span>
              </li>
            </ul>
            
            <a 
              href="https://waymapscanner.github.io/changelog.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>View full changelog</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Download Waymap</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Get the latest version of Waymap and start securing your web applications today.
          </p>
          
          <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8 border border-purple-800/30">
            <h3 className="text-2xl font-bold mb-4">Waymap v6.1.8</h3>
            <p className="text-gray-300 mb-6">Current stable version with all the latest features and improvements.</p>
            
            <a 
              href="https://github.com/TrixSec/waymap/releases/latest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md flex items-center justify-center space-x-2 transition-colors text-lg mb-4"
            >
              <Download className="h-5 w-5" />
              <span>Download Waymap</span>
            </a>
            
            <div className="text-sm text-gray-400">
              <p>Copyright © 2024-2025 Trixsec Org</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <Shield className="h-6 w-6 text-purple-500" />
              <span className="text-xl font-bold">WAYMAP</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-8 items-center">
              <a href="#features" className="hover:text-purple-400 transition-colors mb-4 md:mb-0">Features</a>
              <a href="#usage" className="hover:text-purple-400 transition-colors mb-4 md:mb-0">Usage</a>
              <a href="#changelog" className="hover:text-purple-400 transition-colors mb-4 md:mb-0">Changelog</a>
              <a href="#download" className="hover:text-purple-400 transition-colors mb-4 md:mb-0">Download</a>
              <a 
                href="https://github.com/TrixSec/waymap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>Copyright © 2024-2025 Trixsec Org. All rights reserved.</p>
            <p className="mt-2">
              <a href="https://waymapscanner.github.io/" className="text-purple-400 hover:text-purple-300 transition-colors">
                https://waymapscanner.github.io/
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-purple-800/30 hover:border-purple-600/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default App;
