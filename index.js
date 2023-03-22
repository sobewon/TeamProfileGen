//packages
const inquirer = require("inquirer");
const fs = require('fs');

//modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


//function to prompt and take input from user
//Also contains calls to generateTeamHTML and generateCSS due to using async
async function promptUser() {
    let done = false;
    let teamMembers = [];   //const or let? not sure yet

    while (!done) {
        const { role } = await inquirer.prompt({ //start by choosing role from list
            type: 'list',
            message: 'What is this persons role?',
            name: 'role',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'Exit'],
        });
// if statement to see if user wants to exit
        if (role === 'Exit') {
            console.log('Exiting employee input. \nGood bye!')
            done = true;
        }
        else {
            const { name } = await inquirer.prompt({
                type: 'input',
                message: `What is the ${role.toLowerCase()}'s name?`,
                name: 'name',
            })

            const { id } = await inquirer.prompt({
                type: 'input',
                message: `What is the ${role.toLowerCase()}'s ID?`,
                name: 'id',
            })
            
            const { email } = await inquirer.prompt({
                type: 'input',
                message: `What is the ${role.toLowerCase()}'s email?`,
                name: 'email',
            })
//begin if statements for individual traits of each example: 'intern' has extra trait 'school'
            if (role === 'Employee') {
                let member = new Employee(name, id, email);
                teamMembers.push(member)
            } else if (role === 'Engineer') {
                const { gitHub } = await inquirer.prompt({
                    type: 'input',
                    message: `What is the Engineer's GitHub?`,
                    name: 'gitHub',
                })
                let member = new Engineer(name, id, email, gitHub);
                teamMembers.push(member);
            } else if (role === 'Intern') {
                const { school } = await inquirer.prompt({
                    type: 'input',
                    message: `What School did/does the Intern attend?`,
                    name: 'school',
                })
                let member = new Intern(name, id, email, school);
                teamMembers.push(member)
            } else if (role === 'Manager') {
                const { officeNumber } = await inquirer.prompt({
                    type: 'input',
                    message: `What is the Manager's office number?`,
                    name: 'officeNumber',
                })
                let member = new Manager(name, id, email, officeNumber);
                teamMembers.push(member)
            } else {
                console.log('There has been an error in role choice. Please contact a developer for assistance.')
            }
            console.log(teamMembers)
        }

    }
    // needed to move this here because of async running past it, ending code before being able to input anything
    let totalHTML = generateTeamHTML(teamMembers);
    fs.writeFile('./dist/index.html', totalHTML, (err) => {
        if (err) throw err;
    })
    let cssStyle = generateCSS();
    fs.writeFile('./dist/style.css', cssStyle, (err) => {
        if (err) throw err;
    })
}
//function to generate HTML
function generateTeamHTML(teamMembers) {
    let html = '';

    // Loop over each member and add to html string
    for (let member of teamMembers) {
        let memberHTML = `
        <div class="card">
            <h2>${member.name}</h2>
            <p class="role">Role: ${member.role}</p>
            <p>ID: ${member.id}</p>
            <p>Email: <a href="mailto:${member.email}">${member.email}</a></p>
        `;

      // Add info based on traits
        if (member.role === 'Engineer') {
            memberHTML += `<p>Github: <a href="https://github.com/${member.gitHub}">${member.gitHub}</a></p>`;
        } else if (member.role === 'Intern') {
            memberHTML += `<p>School: ${member.school}</p>`;
        } else if (member.role === 'Manager') {
            memberHTML += `<p>Office Number: ${member.officeNumber}</p>`;
        }

      // Close the div for this single member
        memberHTML += `</div>`;
      // Add to total HTML string
        html += memberHTML;
    }
    // Return the final HTML string
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>My Page</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1 class="header">Team Members</h1>
        <div class="card-container">
            ${html}
        </div>
    </body>
    </html>

    `;
}

//function to generate CSS style sheet code 
//------------#NOTE--------------
//for now it can be hard coded, 
//however later we can cut back on css code by
//using if statements to write out only what is needed
function generateCSS() {
    return `
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    body {
        background-color: #e6f7ff;
    }

    .header {
        color: #2c3e50;
        font-size: 32px;
        margin-top: 30px;
        margin-bottom: 20px;
        background-color: #bdc3c7;
    }
    
    .card {
        width: calc(25% - 10px);
        margin-bottom: 20px;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .card:nth-child(odd) {
        background-color: #f7f7f7;
    }
    
    .card h2 {
        margin-top: 0;
    }
    
    .card p {
        margin-bottom: 5px;
    }
    
    .card p.role {
        font-weight: bold;
        color: #666;
        font-size: 16px;
    }`
}

promptUser();