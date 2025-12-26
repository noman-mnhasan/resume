


//  ****************************************************************  //
//  Header
//  ****************************************************************  //

const header = document.getElementById('header');

const headerHtmlCode = `
    <!-- resume header with your name and title -->
    <h1>Noman Hasan</h1>
    <hr>
    <h2 style="font-weight: bold;">Senior Staff Engineer </h2>
    <h2 style="font-weight: 450; color: #536464ff;">Fluid/Thermal Simulation <b>||</b> High Throughput Simulation with Automation <br> Process/Performance Modeling <b>||</b> Data Analysis & Modeling</h2>
    <h3 style="font-weight: bold; font-size: 15px; color: #282929;">Building virtual capability for an efficient future</h3>
    <hr>
`;

if (header) {
    header.innerHTML = headerHtmlCode;
}


//  ****************************************************************  //
//  Navigation
//  ****************************************************************  //

const navigationBar = document.getElementById('navigation-bar');

const navBarHtmlCode = `
    <nav >
        <ul id="nav-list" class="container">
            <li>
                <a href="./index.html">RESUME</a>
            </li>
            <li>
                <a href="./portfolio.html">PORTFOLIO</a>
            </li>
        </ul>
    </nav>
`;

if (navigationBar) {
    navigationBar.innerHTML = navBarHtmlCode;
}


//  ****************************************************************  //
//  Job Description - Position and Tenure
//  ****************************************************************  //

const jobPositionEntries = document.querySelectorAll('.job-position');

jobPositionEntries.forEach(position => {

    position.innerHTML = `
        <table>
            <tr class="table-text">
                <td style="width: 250px;">
                    ${position.getAttribute('position-name')}
                </td>
                <td>
                    &nbsp;&nbsp; | &nbsp;&nbsp;
                </td>
                <td>
                    ${position.getAttribute('position-tenure')}
                </td>
            </tr>
        </table>
    `;
});






//  ****************************************************************  //
//  PORTFOLIO 
//  ****************************************************************  //


// Get all the anchor elements with the class 'content-link'
const contentLinks = document.querySelectorAll('.content-link');

// Get the element where the content will be displayed
const displayArea = document.getElementById('display-area');



// Function to fetch content from a file and display it
async function loadHtmlContent(filepath, targetElementId) {
    try {
        // Fetch the file from the server
        const response = await fetch(filepath);

        if (!response.ok) {
            throw new Error(`HTTP error! status ${response.status}`);
        }
        // Read the response as plain text
        const htmlText = await response.text();

        // Place the retrieved HTML content into a specified element
        document.getElementById(targetElementId).innerHTML = htmlText;
    } catch (error) {
        console.error("Could not load file: ", error);
        document.getElementById(targetElementId).innerHTML = `<p>Error loading content: ${error.message}</p>`;

    }
} 





// Add a click event listener to each anchor link
contentLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default anchor link behavior (e.g., jumping to top of page)
        event.preventDefault();

        // Get the content
        const newContent = `
            <h2>Description</h2>
            <hr>
            <br>
            <div id="portfolio-description-${link.textContent}" class="description text-justified">
                In this section we will describe - ${link.textContent}
            </div>
        `;

        const capturedFilepath = document.getElementById(link.id).getAttribute('data-content');

        // displayArea.innerHTML = capturedFilepath;

        // Call the "loadHtmlContent" function;
        loadHtmlContent(capturedFilepath, 'display-area')
    });
});



window.onload = function() {
    // Code to execute after the entire page and all resources have loaded
    console.log('Window loaded completely!');
    displayArea.innerHTML = `
        <div id="portfolio-on-window-load" class="description text-justified">Hello! I am Noman Hasan, a mechanical engineer with specialization in fluid and thermal simulation, simulation automation, workflow automation, and data analysis and modeling. 
        <br>
        <br>
        Welcome to my portfolio!!
        <br>
        Please select an item on the left to see details.</p>
    `;
};



