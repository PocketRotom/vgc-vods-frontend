import React from "react";
import useMatches from "../hooks/use-matches";
import { Link } from "react-router-dom";

export const HomePage: React.FC = function HomePage() {
  const organizedMatches = useMatches((state) => state.organizedMatches);

  return (
    <div className="flex flex-wrap">
      {organizedMatches.map((matches) => {
        console.log(matches);
        const formatName = matches[1][0].format_name || "Unknown Format";
        return (
          <div key={formatName} className="w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">{formatName}</h2>
            <table className="min-w-full bg-gray-100 border border-gray-300">
              <thead>
                <tr>
                  <th className="py-1 px-1 border border-gray-300">
                    Tournament
                  </th>
                  <th className="py-1 px-1 border border-gray-300">Player 1</th>
                  <th className="py-1 px-1 border border-gray-300">Player 2</th>
                  <th className="py-1 px-1 border border-gray-300">Round</th>
                </tr>
              </thead>
              <tbody>
                {matches[1].map((match) => (
                  <tr key={match.match_id}>
                    <td className="py-1 px-1 border border-gray-300">
                      {match.event_name}
                    </td>
                    <td className="py-1 px-1 border border-gray-300">
                      {match.player1_name}
                    </td>
                    <td className="py-1 px-1 border border-gray-300">
                      {match.player2_name}
                    </td>
                    <td className="py-1 px-1 border border-gray-300 text-center">
                      <Link
                        to={`/match/${match.match_id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {match.round}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
