"use client";

import data from "@/app/data.json";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchComponent() {
  const [results, setResults] = useState<string[]>(data);
  console.log(results, "aa");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, "omid1");
    const resultsAfterSearch = data.filter((i) =>
      i.includes(event.target.value)
    );
    setResults(resultsAfterSearch);
    // setResults(results.includes(event.target.value));
  };

  // const debouncedResults = useMemo(() => {
  //   return debouce(handleSearch, 300);
  // }, []);

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
