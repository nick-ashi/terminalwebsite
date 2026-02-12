// REMEMBER TO OBFSUCUIUWIQDH THE SCRIPT

document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    const inputField = document.getElementById("command-input");
    

    const asciiNameApple = `
    ▗▖  ▗▖▗▄▄▄▖ ▗▄▄▖▗▖ ▗▖    
    ▐▛▚▖▐▌  █  ▐▌   ▐▌▗▞▘    
    ▐▌ ▝▜▌  █  ▐▌   ▐▛▚▖     
    ▐▌  ▐▌▗▄█▄▖▝▚▄▄▖▐▌ ▐▌    
     ▗▄▖  ▗▄▄▖▗▖ ▗▖▗▄▄▄▖     
    ▐▌ ▐▌▐▌   ▐▌ ▐▌  █       
    ▐▛▀▜▌ ▝▀▚▖▐▛▀▜▌  █       
    ▐▌ ▐▌▗▄▄▞▘▐▌ ▐▌▗▄█▄▖zawa                                                                                                                       
    `;

    const asciiNameWindows = `
    ███    ██ ██  ██████ ██   ██ 
    ████   ██ ██ ██      ██  ██  
    ██ ██  ██ ██ ██      █████   
    ██  ██ ██ ██ ██      ██  ██  
    ██   ████ ██  ██████ ██   ██ 
                                               
     █████  ███████ ██   ██ ██   
    ██   ██ ██      ██   ██ ██   
    ███████ ███████ ███████ ██   
    ██   ██      ██ ██   ██ ██   
    ██   ██ ███████ ██   ██ ██ zawa`

     // Detect the user's platform and select the proper ASCII art.
     let asciiName;
     const platform = navigator.platform.toLowerCase();
     if (platform.indexOf("win") !== -1) {
         asciiName = asciiNameWindows;
     } else if (platform.indexOf("mac") !== -1) {
         asciiName = asciiNameApple;
     } else {
         // Fallback to one of them (here, Apple version) if the platform is not recognized.
         asciiName = asciiNameApple;
     }

    // Input options for the terminal
    const commands = {
        cmd: "Available commands:\nhelp OR cmd\n" + 
        "clear\n\n--- PROFESSIONAL ---\nabout OR whoru\nexperience\ngithub\nskills\nresume\ncontact\n\n" + 
        "--- PERSONAL ---\nhobbies\nmehul\nreina\nhello\npkmn\nname\nanvrsy",
        help: "Available commands:\nhelp OR cmd\nclear\n\n" + 
        "--- PROFESSIONAL ---\nabout OR whoru\nexperience\ngithub\nskills\nresume\ncontact\nashipfd\n\n" +
        "--- PERSONAL ---\nhobbies\nmehul\nreina\nhello\npkmn\nname\nanvrsy",
        about: "<img src='images/Ashizawa, Nicolas IMG_0412.JPG' class='headshot' style='width: 500px; height: auto' alt='My headshot should be here'></img>\nI'm Nick Ashizawa. People either call me Nick or Ashi—either one works! I'm a fourth-year Computer Science major passionate about general software development and eager to gain industry experience. I originally studied Computer Engineering but switched to Computer Science after my second year to follow my greater interest in programming.\n\nI currently work as an Automation Engineer at Citizens Financial Group primarily working with technologies like UiPath, C#, .NetVB, and JS. I have experience teaching the basics of programming in Python, C++, Java, and more, and I was recently involved in research at UC Irvine, focusing on developing digital twins for natural disaster preparedness.\n\nIn my free time, I enjoy playing guitar, soccer, reading, and following the gaming industry.\n\nThis is my terminal-style portfolio. Built with HTML, CSS, and JavaScript. Raw code. No frameworks.",
        whoru: "<img src='images/Ashizawa, Nicolas IMG_0412.JPG' class='headshot' style='width: 500px; height: auto; ' alt='My headshot should be here'></img>\nI'm Nick Ashizawa. People either call me Nick or Ashi—either one works! I'm a fourth-year Computer Science major passionate about general software development and eager to gain industry experience. I originally studied Computer Engineering but switched to Computer Science after my second year to follow my greater interest in programming.\n\nI currently work as an Automation Engineer at Citizens Financial Group primarily working with technologies like UiPath, C#, .NetVB, and JS. I have experience teaching the basics of programming in Python, C++, Java, and more, and I was recently involved in research at UC Irvine, focusing on developing digital twins for natural disaster preparedness.\n\nIn my free time, I enjoy playing guitar, soccer, reading, and following the gaming industry.\n\nThis is my terminal-style portfolio. Built with HTML, CSS, and JavaScript. Raw code. No frameworks.",
        experience: 
        // Citizens exp
        "\n<img src='images/citizens.png' class='exppics' style='width: 250px; height: auto' alt='cfgicon'></img>\n" +
        "<strong><u>(Current) Automation SWE @ Citizens Financial Group</u></strong>\n" +
        "<ul><li>Delivered a project end-to-end automating a large part of a client's workflow involving the monitoring, updating, and maintenance of multiple DDA checking accounts (handling over minimum 50+ transactions daily)</li>\n" +
        "<li>Optimized and added new logic to three legacy automations, improving their efficiency and reliability as well as improving ledgibility of code for future developers</li>\n" +
        "<li>Utilize UiPath to create scalable intelligent process automations</li>\n" +
        "<li>Communicate with the business line, solution architect, and fellow developers in order to ensure the efficiency of an automation</li>\n" +
        "<li>Develop UiPath libraries for developer use in C#, VB</li>\n" +
        "<li>**Re-hired to continue part-time**</li></ul>\n" +
        // UCI exp
        "<img src='images/digitwinpanel.png' class='exppics' style='width:  300px; height: auto;' alt='digitwinpic'></img>\n" +
        "<strong><u>NSF Research: Digital Twins for Natural Disasters (Japan)</u></strong>\n" +
        "<ul><li>Designed and developed an interactive predictive city-scale digital twin for natural disaster preparedness and evacuation optimization as a part of the NSF-funded IoT-SITY research program</li>\n" +
        "<li>Experimented with and integrated tools such as Unity, PLATEAU SDK, CityGML, OpenStreetMaps, and C# to create AI-enabled agents for running simulations</li>\n" +
        "<li>Engineered algorithms to optimize agent behavior, simulating real-world responses to emergency scenarios</li>\n" +
        "<li>Actively communicated project updates through weekly team meetings and contributed to a productive and supportive work environment through effective teamwork</li></ul>\n" +
        //Code Ninjas exp
        "<img src='images/codenin.jpg' class='exppics' style='width:  300px; height: auto;' alt='codeninpic'></img>\n" +
        "<strong><u>Code Ninjas - Instructor, Program Director</u></strong>\n" +
        "<ul><li>Established a Python, Lua, and C++ curriculum by working collaboratively with a small team to design innovative and engaging programming lessons</li>\n" +
        "<li>Taught over 150 students across elementary, middle, and high school age groups, keeping topics accessible to diverse coding backgrounds and age groups</li>\n" +
        "<li>Facilitated student projects using Java and Python to create and modify video games</li></ul>\n" +
        // JCIE exp
        "<img src='images/jcie1.png' class='exppics' style='width:  300px; height: auto;' alt='digitwinpic'></img>\n" +
        "<strong><u>Japan Center for International Exchange (JCIE)</u></strong>\n" +
        "<ul><li>Organized and edited digital files while utilizing interpersonal, verbal, written communication</li>\n" +
        "<li>Identified, analyzed and corrected data entry errors in organization archives during routine data audits through the use of HTML and WordPress</li></ul>\n",
        github: "Check out my GitHub at: <a href='https://github.com/nick-ashi' target='_blank' rel='noopener noreferrer'>github.com/nick-ashi</a>",
        skills: "IN DEV",
        hobbies: "IN DEV",
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
        ],
        ashipfd: "<a href='https://ashipfd.vercel.app' target='_blank' rel='noopener noreferrer'>Click here to go to my finance dashboard project AshiPFD</a>",
        // POKEMON RADICAL RED
        pkmn: "<iframe src='https://www.retrogames.cc/embed/46552-pokemon-radical-red-v4-1.html' align-self: center; width='600' height='450' frameborder='no' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' scrolling='no'></iframe></iframe>\nPokemon Radical Red",
        resume: "Redirecting you to my resume...",
        reina: "Hello, sister..."
    };

    // For viewing the most recent command
    let prevCmd = "";

    // Add the name ASCII art to the terminal
    processCommand("name");

    // Process commands when the user presses Enter
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const command = String(inputField.value.trim()).toLowerCase();
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
        } else if (command === "reina") {
            response = commands.reina;
            setTimeout(() => {
                window.location.href = 'https://tft.op.gg/?hl=en_US';
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