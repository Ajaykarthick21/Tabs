const tabsData = [
    {
    id:1,
    title:'Tab 1' ,
     content:'Content of Tab 1'
},
    {
    id:2,
    title:'Tab 2' ,
     content:'Content of Tab 2'
},
    {
    id:3,
    title:'Tab 3' ,
     content:'Content of Tab 3'
},
]



document.addEventListener("DOMContentLoaded",function(event){
    let activeTab = tabsData[0]

    function renderData(){
        const tabContainer = document.querySelector('#tabContainer')
        const ContentContainer = document.querySelector('#tabContentContainer')


        tabsData.forEach((tab)=>{
            const tabButton = document.createElement('button')
            tabButton.className ='tabLinks'
            tabButton.textContent =tab.title
            tabButton.setAttribute('data-tab',tab.id)
            tabContainer.appendChild(tabButton)

            const tabContent = document.createElement('div')
            tabContent.id = tab.id
            tabContent.innerHTML = `<h1>${tab.title}<h1/><p>${tab.content}</p>`
            ContentContainer.appendChild(tabContent)

        })
        tabContainer.addEventListener("click",function(event){
            if(event.target.matches(".tabLinks")){
                const tabId = event.target.getAttribute("data-tab")
                if(tabId!==activeTab){
                    openTab(tabId)
                    activeTab = tabId
                }
            }
        })
        function openTab(tabId){
            const openTab = document.querySelectorAll(".tabContent")
            const openLinks = document.querySelectorAll(".tabLinks")

            tabContent.forEach((tab)=>tab.classList.remove("active"))
            tabLinks.forEach((tab)=>tab.classList.remove("active"))


            document.getElementById(tabId).classList.add("active")
            document.querySelector(`button[data-tab=${tabId}]`).classList.add('active')
        }
        document.getElementById(activeTab).classList.add("active")
         document.querySelector(`button[data-tab=${activeTab}]`).classList.add('active')
    }
renderData()
})