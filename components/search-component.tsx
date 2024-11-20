"use client";

import data from "@/app/data.json";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function SearchComponent() {
  const [results, setResults] = useState<string[]>(data);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = results.filter((user) =>
      user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredItems);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="search"
          value={searchItem}
          onChange={handleSearch}
          placeholder="Search..."
          className="pr-10"
        />
      </div>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <ul className="divide-y">
            {results.length === 0 ? (
              <p>No data found</p>
            ) : (
              results.map((result, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  {result}
                </li>
              ))
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
