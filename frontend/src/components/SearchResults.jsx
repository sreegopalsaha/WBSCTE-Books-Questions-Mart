import { Card } from "../components/ui/Card";

const mockResults = [
  {
    title: "",
    type: "",
    year: "",
  },
  {
    title: "",
    type: "",
    year: "",
  },
  {
    title: "",
    type: "",
    year: "",
  },
];

const SearchResults = () => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {mockResults.map((result, index) => (
        <Card key={index} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <book className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-gray-900">{result.title}</h3>
              <div className="flex gap-2 mt-1">
                <span className="text-sm text-gray-500">{result.type}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{result.year}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SearchResults;
