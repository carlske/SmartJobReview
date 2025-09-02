import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { Badge, MapPin } from 'lucide-react';
import { useState } from 'react';

const JobDescription = () => {
  const [selectedJob, setSelectedJob] = useState<number>(0);

  const jobs = [
    {
      id: 1,
      title: 'DevOps Engineer - CI/CD & AWS',
      location: 'Ciudad de México, México',
      company: 'TechNova',
      priority: true,
      postedDays: 3,
    },
    {
      id: 2,
      title: 'Site Reliability Engineer (SRE)',
      location: 'Buenos Aires, Argentina',
      company: 'CloudOps',
      priority: false,
      postedDays: 7,
    },
    {
      id: 3,
      title: 'Senior DevSecOps Engineer',
      location: 'Madrid, España',
      company: 'SecureDeploy',
      priority: true,
      postedDays: 2,
    },
    {
      id: 4,
      title: 'Cloud Engineer - GCP & Terraform',
      location: 'Barcelona, España',
      company: 'CloudBuilders',
      priority: false,
      postedDays: 10,
    },
    {
      id: 5,
      title: 'Infrastructure as Code Specialist (IaC)',
      location: 'Remoto',
      company: 'Infratech',
      priority: true,
      postedDays: 5,
    },
    {
      id: 6,
      title: 'Kubernetes Platform Engineer',
      location: 'São Paulo, Brasil',
      company: 'Kubex',
      priority: false,
      postedDays: 14,
    },
    {
      id: 7,
      title: 'DevOps Automation Expert - Python & Ansible',
      location: 'Santiago, Chile',
      company: 'AutoOps',
      priority: false,
      postedDays: 11,
    },
    {
      id: 8,
      title: 'Cloud Security Engineer',
      location: 'Monterrey, México',
      company: 'ShieldCloud',
      priority: true,
      postedDays: 4,
    },
    {
      id: 9,
      title: 'Platform Engineer - Observability Focus',
      location: 'Lima, Perú',
      company: 'PlatOps',
      priority: false,
      postedDays: 9,
    },
    {
      id: 10,
      title: 'DevOps Engineer - Azure & Bicep',
      location: 'Bogotá, Colombia',
      company: 'BlueInfra',
      priority: true,
      postedDays: 6,
    },
    {
      id: 11,
      title: 'CloudOps Engineer - Multi-cloud',
      location: 'Quito, Ecuador',
      company: 'CloudSync',
      priority: false,
      postedDays: 15,
    },
    {
      id: 12,
      title: 'Junior DevOps Engineer - Linux & Bash',
      location: 'Ciudad de Guatemala, Guatemala',
      company: 'StartTech',
      priority: false,
      postedDays: 20,
    },
  ];

  return (
    <div className="lg:col-span-1">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">677 jobs</span>
            <Select defaultValue="priority">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priority">Company Priority</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="relevant">Most Relevant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-0">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedJob === index ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
                onClick={() => setSelectedJob(index)}
              >
                <h3 className="font-medium text-gray-900 mb-2 leading-tight">
                  {job.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  {job.location}
                </div>
                <div className="text-sm text-gray-600 mb-3">{job.company}</div>
                {job.priority && (
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs mb-2">
                    Company Priority
                  </Badge>
                )}
                <div className="text-xs text-gray-500">
                  Posted {job.postedDays} days ago
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDescription;
