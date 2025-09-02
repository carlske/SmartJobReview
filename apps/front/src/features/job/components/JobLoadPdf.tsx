import { Button } from '@/shared/ui/button';

const JobLoadPdf = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">
              Get personalized job recommendations
            </h2>
            <p className="text-purple-100">
              Use AI to see how you match and get help on your career journey
            </p>
          </div>
          <Button className="bg-indigo-800 hover:bg-indigo-700 text-white border border-indigo-600 cursor-pointer">
            Upload your resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobLoadPdf;
