"use client";

import data from "@/app/data.json";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchComponent() {
  const [results, setResults] = useState<string[]>(data);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Mantegh e jostojo ra inja anjam dahid.
    const inputValue = event.target.value;
    setResults(() => {
      if (inputValue === "") {
        return results;
      } else {
        return results.filter((item) => item.includes(inputValue));
      }
    });
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
