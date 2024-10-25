// Handle Sign Up
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulate saving user data (you can implement AJAX here to save to a backend)
    console.log(`User registered: ${name}, ${email}`);

    // Show careers section after successful sign-up
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('careers-section').style.display = 'block';
});

// Career data
const careerData = {
    after10: [
        {
            title: 'Diploma in Engineering',
            skills: ['Technical Skills', 'Problem Solving'],
            companies: ['Company A', 'Company B'],
            path: '1. Diploma -> 2. Job -> 3. B.Tech (optional)',
        },
        {
            title: 'Hotel Management',
            skills: ['Hospitality', 'Communication'],
            companies: ['Hotel A', 'Hotel B'],
            path: '1. Diploma -> 2. Job -> 3. Management (optional)',
        }
    ],
    afterBTech: [
        {
            title: 'Software Developer',
            skills: ['Programming', 'Teamwork'],
            companies: ['Tech Corp', 'Innovate Inc'],
            path: '1. B.Tech -> 2. Entry-level -> 3. Senior Developer',
        },
        {
            title: 'Data Scientist',
            skills: ['Statistics', 'Machine Learning'],
            companies: ['Data Co', 'AI Solutions'],
            path: '1. B.Tech -> 2. Analyst -> 3. Lead Data Scientist',
        }
    ],
};

// Show career options
function showCareers(level) {
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = ''; // Clear previous content
    const careers = careerData[level];

    careers.forEach((career) => {
        const careerDiv = document.createElement('div');
        careerDiv.innerHTML = `
            <h4>${career.title}</h4>
            <p><strong>Skills:</strong> ${career.skills.join(', ')}</p>
            <p><strong>Companies:</strong> ${career.companies.join(', ')}</p>
            <p><strong>Career Path:</strong> ${career.path}</p>
            <hr>
        `;
        detailsContent.appendChild(careerDiv);
    });

    document.getElementById('careers-section').style.display = 'none'; // Hide career categories
    document.getElementById('career-details').style.display = 'block'; // Show career details
}

// Go back to career options
function goBack() {
    document.getElementById('career-details').style.display = 'none'; // Hide career details
    document.getElementById('careers-section').style.display = 'block'; // Show career categories again
}
