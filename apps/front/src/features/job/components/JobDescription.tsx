import { Card, CardContent } from '@/shared/ui/card';

const JobDescription = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Job description
            </h3>
            <div className="mb-4">
              <span className="text-sm text-gray-600">Job ID</span>
              <div className="font-semibold">102400</div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              En TechNova Labs estamos buscando a un/a desarrollador/a frontend
              apasionado/a por la creación de experiencias digitales limpias, rápidas y
              accesibles. Si eres de los que sueña con componentes reutilizables, amas
              el tipado fuerte y te emociona un buen pull request, esta oferta es para
              ti
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              Insights from previous hires
            </h3>
            <div className="mb-4">
              <h4 className="font-medium text-gray-700 mb-3">Years of experience</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Less than 2 years</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-sm">2-4 years</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobDescription;
