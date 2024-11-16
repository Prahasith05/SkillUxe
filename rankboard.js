document.addEventListener("DOMContentLoaded", () => {
    const rankboardData = JSON.parse(localStorage.getItem('rankboardData')) || [];
    const leaderboardTable = document.getElementById("leaderboard");

    // Sort data by skill rating in descending order
    rankboardData.sort((a, b) => b.skillRating - a.skillRating);

    // Clear any existing rows (if any)
    leaderboardTable.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Course</th>
            <th>Score</th>
            <th>Skill Rating</th>
        </tr>
    `;

    // Add each entry as a row in the table
    rankboardData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.username}</td>
            <td>${entry.course}</td>
            <td>${entry.score}</td>
            <td>${entry.skillRating}</td>
        `;
        leaderboardTable.appendChild(row);
    });
});
