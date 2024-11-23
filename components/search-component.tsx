"use client";

import data from "@/app/data.json";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchComponent() {
  const [results, setResults] = useState<string[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Mantegh e jostojo ra inja anjam dahid.
    setResults(event.target.value);
  };
  const filterResult = results.filter((item) =>
    item.toLocaleLowerCase().includes(results?.toLocaleString())
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="search"
          onChange={handleSearch}
          placeholder="Search..."
          className="pr-10"
          value={results}
        />
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <ul className="divide-y">
            {filterResult.map((result, index) => (
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
