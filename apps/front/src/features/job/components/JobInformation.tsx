import { Card, CardContent } from '@/shared/ui/card';
import { BadgeInfo } from 'lucide-react';



const JobInformation = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <BadgeInfo className=" text-blue-500 text-xs mb-3">
              Company Priority
            </BadgeInfo>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Desarrollador/a Frontend React - Remoto
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobInformation;
