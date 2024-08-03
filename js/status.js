let herostatus = document.getElementsByClassName("hero-status")[0];
let colours = {"Updated": "rgb(0, 255, 0)", "Updating": "rgb(255, 125, 55)", "Detected": "rgb(255, 0, 0)"};

fetch("https://raw.githubusercontent.com/beanhac/beanhac.github.io/main/status.json").then(res => res.json().then(result => {
    for (var game in result) {
        if (!(game == "__date")) {
            let statusgame = document.createElement("p");
            let statustext = document.createElement("span");
            statustext.style.color = colours[result[game]];
            statustext.style.fontWeight = 600;
            statustext.innerHTML = result[game];
    
            statusgame.innerHTML = `${game}: ${statustext.outerHTML}`;
            herostatus.appendChild(statusgame);
        };
    };

    let statusdate = document.createElement("p");
    statusdate.style.color = "white";
    statusdate.style.fontSize = "12px";
    statusdate.style.textAlign = "center";
    statusdate.style.textTransform = "uppercase";
    statusdate.style.fontWeight = 600;
    statusdate.innerHTML = result["__date"];
    herostatus.appendChild(statusdate);
}));
