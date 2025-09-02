import SearchBar from './features/job/components/SearchBar';
import JobListingsSidebar from './features/job/components/JobListingsSidebar';
import JobLoadPdf from './features/job/components/JobLoadPdf';
import JobDetails from './features/job/components/JobDetails';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar />
      <JobLoadPdf />

      <main>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <JobListingsSidebar />
            <JobDetails />
          </div>
        </div>
      </main>
    </div>
  );
}
