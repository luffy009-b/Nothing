document.addEventListener("DOMContentLoaded", function () {
    loadHistory();
});

function loadWebsite() {
    let url = document.getElementById("urlInput").value;
    if (!url.startsWith("http")) {
        url = "https://" + url;
    }

    document.getElementById("streamFrame").src = url;
    saveToHistory(url);
}

function saveToHistory(url) {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    if (!history.includes(url)) {
        history.push(url);
        localStorage.setItem("history", JSON.stringify(history));
        updateHistoryUI();
    }
}

function loadHistory() {
    updateHistoryUI();
}

function updateHistoryUI() {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    history.forEach(url => {
        let listItem = document.createElement("li");
        listItem.textContent = url;
        listItem.onclick = function () {
            document.getElementById("streamFrame").src = url;
        };
        historyList.appendChild(listItem);
    });
}
