document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const inputField = document.getElementById("command-input");

    const asciiName = `
    ▗▖  ▗▖▗▄▄▄▖ ▗▄▄▖▗▖ ▗▖    
    ▐▛▚▖▐▌  █  ▐▌   ▐▌▗▞▘    
    ▐▌ ▝▜▌  █  ▐▌   ▐▛▚▖     
    ▐▌  ▐▌▗▄█▄▖▝▚▄▄▖▐▌ ▐▌    
     ▗▄▖  ▗▄▄▖▗▖ ▗▖▗▄▄▄▖     
    ▐▌ ▐▌▐▌   ▐▌ ▐▌  █       
    ▐▛▀▜▌ ▝▀▚▖▐▛▀▜▌  █       
    ▐▌ ▐▌▗▄▄▞▘▐▌ ▐▌▗▄█▄▖zawa                                                                                                                       
    `;

    // Input options for the terminal
    const commands = {
        cmd: "Available commands:\nhelp\nabout OR whoru\nprojects\ncontact\nclear\nmehul\nhello\nname\nanvrsy\npkmn\nresume",
        help: "Available commands:\nhelp\nabout OR whoru\nprojects\ncontact\nclear\nmehul\nhello\nname\nanvrsy\npkmn\nresume",
        about: "<img src='images/Ashizawa, Nicolas IMG_0412.JPG' class='headshot' style='width: 500px; height: auto' alt='My headshot should be here'></img>\nI'm Nick Ashizawa. People either call me Nick or Ashi—either one works! I'm a fourth-year Computer Science major passionate about general software development and eager to gain industry experience. I originally studied Computer Engineering but switched to Computer Science after my second year to follow my greater interest in programming.\n\nI currently work as an Automation Engineer at Citizens Financial Group primarily working with technologies like UiPath, C#, .NetVB, and JS. I have experience teaching the basics of programming in Python, C++, Java, and more, and I was recently involved in research at UC Irvine, focusing on developing digital twins for natural disaster preparedness.\n\nIn my free time, I enjoy playing guitar, soccer, reading, and following the gaming industry.\n\nThis is my terminal-style portfolio. Built with HTML, CSS, and JavaScript. Raw code. No frameworks.",
        whoru: "<img src='images/Ashizawa, Nicolas IMG_0412.JPG' class='headshot' style='width: 500px; height: auto; ' alt='My headshot should be here'></img>\nI'm Nick Ashizawa. People either call me Nick or Ashi—either one works! I'm a fourth-year Computer Science major passionate about general software development and eager to gain industry experience. I originally studied Computer Engineering but switched to Computer Science after my second year to follow my greater interest in programming.\n\nI currently work as an Automation Engineer at Citizens Financial Group primarily working with technologies like UiPath, C#, .NetVB, and JS. I have experience teaching the basics of programming in Python, C++, Java, and more, and I was recently involved in research at UC Irvine, focusing on developing digital twins for natural disaster preparedness.\n\nIn my free time, I enjoy playing guitar, soccer, reading, and following the gaming industry.\n\nThis is my terminal-style portfolio. Built with HTML, CSS, and JavaScript. Raw code. No frameworks.",
        projects: "Check out my GitHub at: https://github.com/nick-ashi",
        contact: "Email me at: ashizawa.n@northeastern.edu",
        clear: "",
        mehul: "My inspiration from mehulnair.com. Hire that man immediately.",
        ls: "Force of habit? There's no files here (please don't crack my website)😅",
        hello: [
            "Don't say hi to me. I'm just a computer.",
            "Again? I'm not a person. I'm a computer.",
            "Can you please just use the terminal for its intended purpose.",
            "I'm just a computer. I don't have feelings."],
        name: asciiName,
        "08032023": [
            "i love you <3",
            "miss you :)",
            "i'm most likely thinking about you right now"
        ],
        // POKEMON RADICAL RED
        pkmn: "<iframe src='https://www.retrogames.cc/embed/46552-pokemon-radical-red-v4-1.html' align-self: center; width='600' height='450' frameborder='no' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' scrolling='no'></iframe></iframe>\nPokemon Radical Red",
        resume: "Redirecting you to my resume..."
    };

    // For viewing the most recent command
    let prevCmd = "";

    // Add the name ASCII art to the terminal
    processCommand("name");

    // Process commands when the user presses Enter
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = inputField.value.trim();
            processCommand(command);
            inputField.value = "";
        }
        if (event.key === "ArrowUp") {
            inputField.value = prevCmd;
        }
    });

    // Add the leadup to the terminal
    function addPrompt() {
        output.innerHTML += `<span class="welcome">welcome</span><span class="ashiterminal">@ashiterminal</span>:~$ `;
    }

    // Process the command and add the response to the terminal
    function processCommand(command) {
        let response;

        if (command === "hello") {
            const helloResponses = commands.hello;
            response = helloResponses[Math.floor(Math.random() * helloResponses.length)];
        } else if (command === "08032023") {
            const anniversaryResponses = commands["08032023"];
            response = anniversaryResponses[Math.floor(Math.random() * anniversaryResponses.length)];
        } else if (command === "resume") {
            response = commands.resume;
            setTimeout(() => {
                window.location.href = 'resume.html';
            }, 1000); 
        } else {
            response = commands[command] || `Command not found: ${command}`;
        }
        if (command === "clear") {
            output.innerHTML = "";
            return;
        }

        addPrompt();
        output.innerHTML += `${command}\n${response}\n`;
        output.scrollTop = output.scrollHeight;
        prevCmd = command;
    }
});
