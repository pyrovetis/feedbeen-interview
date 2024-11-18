"use client";

import data from "@/app/data.json";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchComponent() {
  const [results, setResults] = useState<string[]>(data);
  const [input, setInput] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Mantegh e jostojo ra inja anjam dahid.

    setInput(event.currentTarget.value);
  };

  const handleDebounce = () => {
    const form = e.currentTarget.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setInput(form);
    }, 1000);

    handleFilter();
  };
  useEffect(() => handleDebounce(), [input]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="search"
          onChange={handleSearch}
          value={input}
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
