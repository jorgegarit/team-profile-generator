//  html for the manager 
const createManager = manager => {
    return `
    <div class="col-4 mt-4">
        <div class="card emp-card">
            <div class="card-header bg-dark text-info">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <p class="empId>Id: ${manager.id}</p>
                <p class="empEmail>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="empOfficeNumber">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// html for the engineer
const createEngineer = engineer => {
    return `
    <div class="col-4 mt-4">
    <div class="card emp-card">
        <div class="card-header bg-dark text-info">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <p class="empId>Id: ${engineer.id}</p>
            <p class="empEmail>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="empGitHub">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</p>
        </div>
    </div>
</div>
    `;
}
    

