chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //if there is alert on page, first remove it to occur duplicate alert
    if (document.getElementById("boxAlert")) {
        document.getElementById("boxAlert").remove();
    }

    const chatgptAPIUrl = "<YOUR API URL>";
    fetch(chatgptAPIUrl + request.input + "&choice=" + request.choice)
        .then(res => res.json())
        .then(json => {
            window.alert = function (message) {
                var alertBox = document.createElement("div");
                alertBox.id = "boxAlert";
                alertBox.innerHTML = message;
                alertBox.style.fontFamily = "ColfaxAI, Helvetica, sans-serif";
                alertBox.style.borderRadius = "10px";
                alertBox.style.position = "fixed";
                alertBox.style.top = "10px";
                alertBox.style.right = "10px";
                alertBox.style.width = "auto";
                alertBox.style.maxWidth = "30%";
                alertBox.style.backgroundColor = "#fff";
                alertBox.style.border = "1px solid #f5c6cb";
                alertBox.style.padding = "0.75rem 1.25rem";
                alertBox.style.zIndex = "99999999";

                var buttonDiv = document.createElement("div");
                buttonDiv.style.display = "flex";
                buttonDiv.style.justifyContent = "center";
                buttonDiv.style.marginTop = "0.5rem";

                //Close button and copy button
                var closeButton = document.createElement("button");
                closeButton.innerText = "X";
                closeButton.style.width = "25px";
                closeButton.style.height = "25px";
                closeButton.style.backgroundColor = "transparent";
                closeButton.style.border = "none";
                closeButton.style.padding = "0.25rem 0.5rem";
                closeButton.style.marginRight = "0.5rem";

                var copyButton = document.createElement("button");
                copyButton.style.width = "25px";
                copyButton.style.height = "25px";
                copyButton.style.backgroundImage = "url(" + chrome.runtime.getURL('copy.png') + ")";
                copyButton.style.backgroundPosition = "center";
                copyButton.style.backgroundSize = "contain";
                copyButton.style.backgroundRepeat = "no-repeat";
                copyButton.style.backgroundColor = "transparent";
                copyButton.style.border = "none";
                copyButton.style.padding = "0.5rem 0.5rem";
                copyButton.style.marginLeft = "0.5rem";

                buttonDiv.appendChild(closeButton);
                buttonDiv.appendChild(copyButton);

                alertBox.appendChild(buttonDiv);
                document.body.appendChild(alertBox);

                // Close the alert box
                closeButton.addEventListener("click", function () {
                    alertBox.remove();
                });
                copyButton.addEventListener("click", function () {
                    navigator.clipboard.writeText(message);
                    alertBox.style.width = "auto";
                    alertBox.innerHTML = "Copied to clipboard";
                    //Remove the alert box after 3 second
                    setTimeout(function () {
                        alertBox.remove();
                    }, 2000);
                });
            }

            chrome.runtime.onMessage.removeListener(arguments.callee);
            alert(json.result);
        })
});
