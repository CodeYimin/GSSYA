"use client";

import { API_URL } from "@/data/consts";
import { ReactElement, useEffect, useState } from "react";
import Record from "./Record";

async function getResponses(password: string) {
  const response = await fetch(
    `${API_URL}/mental-health-assessment/getResponses?password=${password}`
  );
  return await response.text();
}

interface PageProps {}

export default function Page({}: PageProps): ReactElement {
  const [response, setResponse] = useState<
    {
      email: string;
      age: string;
      scores: number[];
      scoreMax: number;
      score: number;
      emergency: boolean;
      date: string;
      responses: string[];
      overallFeedback: string;
    }[]
  >([]);

  useEffect(() => {
    const password = window.prompt("Enter password to view responses") || "";
    getResponses(password).then((response) =>
      setResponse(
        JSON.parse(response).sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      )
    );
  }, []);

  return (
    <div className="mt-16 p-5 text-center flex flex-col items-center gap-2">
      {response.map((record, i) => (
        <div key={i}>
          <Record record={record} />
        </div>
      ))}
    </div>
  );
}
