import { Filter, MapPin, Search } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

const SearchBar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for job title or keywords"
              className="pl-10 h-12"
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search for location" className="pl-10 h-12" />
          </div>
          <Button className="bg-indigo-900 hover:bg-indigo-800 h-12 px-8 cursor-pointer">
            Search jobs
          </Button>
        </div>

        <div className="flex gap-4 mt-4">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            All Filters
          </Button>
          <Button variant="ghost" className="text-gray-600">
            Clear All
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
