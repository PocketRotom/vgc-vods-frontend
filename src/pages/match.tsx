import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMatchByID } from "../services/matches";
import useMatch from "../hooks/use-matches";
import Flag from "react-flagpack";

export const MatchPage: React.FC = function MatchPage() {
  let params = useParams();
  let matchId = params.matchId;
  const currentMatch = useMatch((state) => state.currentMatch);
  const setCurrentMatch = useMatch((state) => state.setCurrentMatch);

  useEffect(() => {
    async function fetchMatch() {
      if (matchId) {
        try {
          const match = await getMatchByID(Number(matchId));
          setCurrentMatch(match);
        } catch (error) {
          console.error("Error fetching match:", error);
        }
      }
    }

    fetchMatch();
  }, [matchId, setCurrentMatch]);

  if (!currentMatch) {
    return <div>Loading...</div>;
  }

  const {
    event_name,
    round,
    age_division,
    event_location,
    country_name,
    date,
    url,
  } = currentMatch;
  let ageDivision;
  if (age_division === "M") {
    ageDivision = "Masters";
  } else if (age_division === "S") {
    ageDivision = "Senior";
  } else {
    ageDivision = "Junior";
  }
  const formattedDate = `${new Date(date).getFullYear()}-${
    new Date(date).getMonth() + 1
  }-${new Date(date).getDate()}`;
  const videoUrl = url.replace("watch?v=", "embed/");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{`${event_name} - ${round} - ${ageDivision}`}</h1>
      <h2 className="text-lg text-gray-600">{`${event_location}, ${country_name}, ${formattedDate}`}</h2>
      <div className="flex mt-4">
        <div className="w-2/3 p-2">
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          ></iframe>
        </div>
        <div className="w-1/3 p-2">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-y border-gray-300">
              <tbody>
                <tr>
                  <th colSpan={2} className="p-2 border-y">
                    Player 1
                  </th>
                  <td colSpan={3} className="p-2 border-y">
                    {currentMatch.player1_name}
                  </td>
                  <td className="p-2 border-y">
                    <Flag
                      hasBorder={false}
                      size="L"
                      code={currentMatch.p1_country_code}
                    />
                  </td>
                </tr>
                <tr>
                  {[
                    currentMatch.pokemon1_p1_id,
                    currentMatch.pokemon2_p1_id,
                    currentMatch.pokemon3_p1_id,
                    currentMatch.pokemon4_p1_id,
                    currentMatch.pokemon5_p1_id,
                    currentMatch.pokemon6_p1_id,
                  ].map((id, index) => (
                    <td key={index} className="p-2 border-y">
                      <img
                        alt={currentMatch[`pokemon${index + 1}_p1_name`]}
                        src={`https://pocketrotom.pt/vods_test/${id}.png`}
                        className="w-full h-auto"
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <th colSpan={2} className="p-2 border-y">
                    Player 2
                  </th>
                  <td colSpan={3} className="p-2 border-y">
                    {currentMatch.player2_name}
                  </td>
                  <td className="p-2 border-y">
                    <Flag
                      hasBorder={false}
                      size="L"
                      code={currentMatch.p2_country_code}
                    />
                  </td>
                </tr>
                <tr>
                  {[
                    currentMatch.pokemon1_p2_id,
                    currentMatch.pokemon2_p2_id,
                    currentMatch.pokemon3_p2_id,
                    currentMatch.pokemon4_p2_id,
                    currentMatch.pokemon5_p2_id,
                    currentMatch.pokemon6_p2_id,
                  ].map((id, index) => (
                    <td key={index} className="p-2 border-y">
                      <img
                        alt={currentMatch[`pokemon${index + 1}_p2_name`]}
                        src={`https://pocketrotom.pt/vods_test/${id}.png`}
                        className="w-full h-auto"
                      />
                    </td>
                  ))}
                </tr>
                {currentMatch.caster1_name && (
                  <>
                    <tr>
                      <th colSpan={6} className="p-2 border-y">
                        Casters
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={2} className="p-2 border-y">
                        {currentMatch.caster1_name}
                      </td>
                      <td colSpan={1} className="p-2 border-y">
                        <Flag
                          hasBorder={false}
                          size="L"
                          code={currentMatch.c1_country_code}
                        />
                      </td>
                      {currentMatch.caster2_name && (
                        <>
                          <td colSpan={2} className="p-2 border-y">
                            {currentMatch.caster2_name}
                          </td>
                          <td colSpan={1} className="p-2 border-y">
                            <Flag
                              hasBorder={false}
                              size="L"
                              code={currentMatch.c2_country_code}
                            />
                          </td>
                        </>
                      )}
                    </tr>
                  </>
                )}
                {true && ( // Assuming spoilers is always true for this example
                  <>
                    <tr>
                      <th rowSpan={2} colSpan={2} className="p-2 border-y">
                        Game 1
                      </th>
                      {[
                        currentMatch.lead1_p1_g1_id,
                        currentMatch.lead2_p1_g1_id,
                        currentMatch.back1_p1_g1_id,
                        currentMatch.back2_p1_g1_id,
                      ].map((id, index) => (
                        <td key={index} className="p-2 border-y">
                          <img
                            alt={currentMatch[`lead${index + 1}_p1_g1_name`]}
                            src={`https://pocketrotom.pt/vods_test/${id}.png`}
                            className="w-full h-auto"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {[
                        currentMatch.lead1_p2_g1_id,
                        currentMatch.lead2_p2_g1_id,
                        currentMatch.back1_p2_g1_id,
                        currentMatch.back2_p2_g1_id,
                      ].map((id, index) => (
                        <td key={index} className="p-2 border-y">
                          <img
                            alt={currentMatch[`lead${index + 1}_p2_g1_name`]}
                            src={`https://pocketrotom.pt/vods_test/${id}.png`}
                            className="w-full h-auto"
                          />
                        </td>
                      ))}
                    </tr>
                    {currentMatch.lead1_p1_g2_name && (
                      <>
                        <tr>
                          <th rowSpan={2} colSpan={2} className="p-2 border-y">
                            Game 2
                          </th>
                          {[
                            currentMatch.lead1_p1_g2_id,
                            currentMatch.lead2_p1_g2_id,
                            currentMatch.back1_p1_g2_id,
                            currentMatch.back2_p1_g2_id,
                          ].map((id, index) => (
                            <td key={index} className="p-2 border-y">
                              <img
                                alt={
                                  currentMatch[`lead${index + 1}_p1_g2_name`]
                                }
                                src={`https://pocketrotom.pt/vods_test/${id}.png`}
                                className="w-full h-auto"
                              />
                            </td>
                          ))}
                        </tr>
                        <tr>
                          {[
                            currentMatch.lead1_p2_g2_id,
                            currentMatch.lead2_p2_g2_id,
                            currentMatch.back1_p2_g2_id,
                            currentMatch.back2_p2_g2_id,
                          ].map((id, index) => (
                            <td key={index} className="p-2 border-y">
                              <img
                                alt={
                                  currentMatch[`lead${index + 1}_p2_g2_name`]
                                }
                                src={`https://pocketrotom.pt/vods_test/${id}.png`}
                                className="w-full h-auto"
                              />
                            </td>
                          ))}
                        </tr>
                      </>
                    )}
                    {currentMatch.lead1_p1_g3_name && (
                      <>
                        <tr>
                          <th rowSpan={2} colSpan={2} className="p-2 border-y">
                            Game 3
                          </th>
                          {[
                            currentMatch.lead1_p1_g3_id,
                            currentMatch.lead2_p1_g3_id,
                            currentMatch.back1_p1_g3_id,
                            currentMatch.back2_p1_g3_id,
                          ].map((id, index) => (
                            <td key={index} className="p-2 border-y">
                              <img
                                alt={
                                  currentMatch[`lead${index + 1}_p1_g3_name`]
                                }
                                src={`https://pocketrotom.pt/vods_test/${id}.png`}
                                className="w-full h-auto"
                              />
                            </td>
                          ))}
                        </tr>
                        <tr>
                          {[
                            currentMatch.lead1_p2_g3_id,
                            currentMatch.lead2_p2_g3_id,
                            currentMatch.back1_p2_g3_id,
                            currentMatch.back2_p2_g3_id,
                          ].map((id, index) => (
                            <td key={index} className="p-2 border-y">
                              <img
                                alt={
                                  currentMatch[`lead${index + 1}_p2_g3_name`]
                                }
                                src={`https://pocketrotom.pt/vods_test/${id}.png`}
                                className="w-full h-auto"
                              />
                            </td>
                          ))}
                        </tr>
                      </>
                    )}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
