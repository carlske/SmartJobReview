import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import { Badge, MapPin } from 'lucide-react';
import JobDescription from './JobListingsSidebar';

const JobDetails = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Badge className="bg-yellow-100 text-yellow-800 text-xs mb-3">
                Company Priority
              </Badge>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Desarrollador/a Frontend React - Remoto
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Remoto
              </div>
              <Button className="bg-indigo-900 hover:bg-indigo-800 cursor-pointer">
                Apply Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <JobDescription />
    </div>
  );
};

export default JobDetails;
