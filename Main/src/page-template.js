const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="manager-card">
            <div class="employee-info">
            <h2 class="employee-name">${manager.name}</h2>
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
        <div class="engineer-card">
            <div class="employee-info">
                <h2 class="employee-name">${engineer.name}</h2>
                <p>${engineer.id}</p>
                <p>${engineer.email}</p>
                <p>${engineer.github}</p>
            </div>
        </div>
        `;
        // push to html
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="intern-card">
            <div class="employee-info">
                <h2 class="employee-name">${intern.name}</h2>
                <p>${intern.id}</p>
                <p>${intern.email}</p>
                <p>${intern.school}</p>
        </div>
    </div>
        `;
        // push to html
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}