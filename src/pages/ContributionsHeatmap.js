import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./ContributionsHeatmap.css";
import axios from "axios";
import { Tooltip as ReactTooltip } from "react-tooltip";

const ContributionsHeatmap = () => {
	const [contributions, setContributions] = useState([]);

	useEffect(() => {
		const fetchContributions = async () => {
			const token = process.env.REACT_APP_GITHUB_TOKEN;
			const query = `
                query {
                    viewer {
                        contributionsCollection {
                            contributionCalendar {
                                weeks {
                                    contributionDays {
                                        date
                                        contributionCount
                                    }
                                }
                            }
                        }
                    }
                }
            `;

			try {
				const response = await axios.post(
					"https://api.github.com/graphql",
					{ query },
					{
						headers: {
							Authorization: `bearer ${token}`,
						},
					}
				);

				const weeks =
					response.data.data.viewer.contributionsCollection.contributionCalendar
						.weeks;
				const contributionsArray = weeks.flatMap((week) =>
					week.contributionDays.map((day) => ({
						date: day.date,
						count: day.contributionCount,
					}))
				);

				setContributions(contributionsArray);
			} catch (error) {
				console.error("Error fetching contributions:", error);
			}
		};

		fetchContributions();
	}, []);

	return (
		<div className="heatmap-container">
			<h2 className="heatmap-title">Days I Code</h2>
			<div className="heatmap-wrapper">
				<CalendarHeatmap
					startDate={
						new Date(new Date().setFullYear(new Date().getFullYear() - 1))
					}
					endDate={new Date()}
					values={contributions}
					classForValue={(value) => {
						if (!value) {
							return "color-empty";
						}
						return `color-github-${Math.min(value.count, 4)}`;
					}}
					tooltipDataAttrs={(value) => {
						return {
							"data-tip": value.date
								? `${value.date}: ${value.count} contributions`
								: "No contributions",
						};
					}}
				/>
			</div>
			<ReactTooltip />
		</div>
	);
};

export default ContributionsHeatmap;
