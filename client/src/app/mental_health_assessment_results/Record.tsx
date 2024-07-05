import { MENTAL_HEALTH_ASSESSMENT_QUESTIONS } from "@/data/consts";
import { ReactElement, useState } from "react";

interface RecordProps {
  record: {
    email: string;
    age: string;
    scores: number[];
    scoreMax: number;
    score: number;
    emergency: boolean;
    date: string;
  };
}

export default function Record({ record }: RecordProps): ReactElement {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="mt-5 text-zinc-800 border-2 border-zinc-500 rounded-md p-3 flex items-center flex-col">
      <div className="flex gap-5 items-center text-sm">
        <div>
          <span className="font-semibold">Email:</span> {record.email}
        </div>
        <div>
          <span className="font-semibold">Age:</span> {record.age}
        </div>
        <div>
          <span className="font-semibold">Score:</span>{" "}
          {Math.round((record.score / record.scoreMax) * 100)}% ({record.score}/
          {record.scoreMax})
        </div>
        <div>
          <span className="font-semibold">Emergency:</span>{" "}
          {record.emergency ? "Yes" : "No"}
        </div>
        <div>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(record.date).toLocaleDateString()}{" "}
          {new Date(record.date).toLocaleTimeString()} (
          {Math.round(
            (new Date().getTime() - new Date(record.date).getTime()) /
              1000 /
              60 /
              60
          )}{" "}
          hours ago)
        </div>
        <div
          className="rounded-sm border-zinc-500 cursor-pointer border p-1 text-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide" : "Show"} scores
        </div>
      </div>
      {expanded && (
        <div className="flex flex-col gap-2 mt-3 text-sm">
          {record.scores.map((score, i) => (
            <div key={i}>
              <span className="font-semibold">
                {MENTAL_HEALTH_ASSESSMENT_QUESTIONS[i].question}:{" "}
              </span>
              {MENTAL_HEALTH_ASSESSMENT_QUESTIONS[i].answers[score]} ({score}/4)
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
