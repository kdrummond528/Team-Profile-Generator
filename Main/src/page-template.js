const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="manager-card">
            <div class="">
             <h2 class="cardtitle">${manager.name}</h2>
             <p>${manager.id}</p>
             <p>${manager.email}</p>
             <p>${manager.officeNumber}</p>
            </div>
        </div>
        `;
        // push to html
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `

        `;
        // push to html
    };

    // create the html for interns
    const generateIntern = intern => {
        return `

        `;
        // push to html
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}