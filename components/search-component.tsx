"use client";

import data from "@/app/data.json";
import { useDebounceState } from "@/lib/use-debounce-state";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchComponent() {
  const [results, setResults] = useDebounceState<string[]>(data, 500);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value) {
      setResults(data);
      return;
    }
    const results = data.filter((result) =>
      result.toLowerCase().includes(value.toLowerCase())
    );
    setResults(results);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="search"
          onChange={handleSearch}
          placeholder="Search..."
          className="pr-10"
        />
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <ul className="divide-y">
            {results.map((result, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-muted transition-colors"
              >
                {result}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
