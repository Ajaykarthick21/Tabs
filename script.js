const tabsData = [
    { id: 1, title: "Tab 1", content: "Content of Tab 1" },
    { id: 2, title: "Tab 2", content: "Content of Tab 2" },
    { id: 3, title: "Tab 3", content: "Content of Tab 3" },
];

document.addEventListener("DOMContentLoaded", function () {
    let activeTab = String(tabsData[0].id);

    function renderData() {
        const tabContainer = document.querySelector("#tabContainer");
        const contentContainer = document.querySelector("#tabContentContainer");

        tabsData.forEach((tab) => {
            // Create tab button
            const tabButton = document.createElement("button");
            tabButton.className = "tabLinks";
            tabButton.textContent = tab.title;
            tabButton.setAttribute("data-tab", tab.id);
            tabContainer.appendChild(tabButton);

            // Create tab content
            const tabContent = document.createElement("div");
            tabContent.id = tab.id;
            tabContent.className = "tabContent";
            tabContent.innerHTML = `<h1>${tab.title}</h1><p>${tab.content}</p>`;
            contentContainer.appendChild(tabContent);
        });

        // Add event listener for tab switching
        tabContainer.addEventListener("click", function (event) {
            if (event.target.matches(".tabLinks")) {
                const tabId = event.target.getAttribute("data-tab");
                if (tabId !== activeTab) {
                    openTab(tabId);
                    activeTab = tabId;
                }
            }
        });

        function openTab(tabId) {
            // Hide all tabs
            const allTabs = document.querySelectorAll(".tabContent");
            const allLinks = document.querySelectorAll(".tabLinks");

            allTabs.forEach((tab) => tab.classList.remove("active"));
            allLinks.forEach((tab) => tab.classList.remove("active"));

            // Show selected tab
            document.getElementById(tabId).classList.add("active");
            document.querySelector(`button[data-tab='${tabId}']`).classList.add("active");
        }

        // Initialize with the first tab active
        openTab(activeTab);
    }

    renderData();
});
