import getApiRequest from "./fetch.js"

const hamburgerBtn = document.getElementById('hamburger')
const mobMenu = document.getElementById('mobMenu')


hamburgerBtn.addEventListener("click", () => {
    mobMenu.classList.toggle('translate-x-[200%]')
})

const form = document.getElementById('form')
const linkInput = document.getElementById('linkInput')
const originalLnk = document.getElementById('originalLnk')
const shortenLnk = document.getElementById('shortenLnk')
const copyBtn = document.getElementById('copyBtn')
const error = document.getElementById('error')
const shortenContainer = document.getElementById('shorten-container')

// Check if there is data stored in the local storage and display it
if (localStorage.getItem('data')) {
    const storedData = JSON.parse(localStorage.getItem('data'))
    try {

        originalLnk.innerText = storedData.result.original_link
        originalLnk.setAttribute('href', storedData.result.original_link)
        shortenLnk.innerText = storedData.result.short_link
        shortenLnk.setAttribute('href', storedData.result.short_link)
        shortenContainer.classList.remove('invisible')
    } catch {
        originalLnk.innerText = 'Please add correct link'
        originalLnk.setAttribute("href", '#')
        shortenLnk.innerText = ''
        shortenLnk.setAttribute("href", '#')
        shortenContainer.classList.add('invisible')
    }
}
// add link on submit
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = linkInput.value
    linkInput.value = null
    displayData(inputValue)
})

async function displayData(link) {

    const validUrl = validateURL(link)

    try{
        const data = await getApiRequest(validUrl)
        
        localStorage.setItem('data', JSON.stringify(data))
         
        originalLnk.innerText = validUrl
        originalLnk.setAttribute("href", validUrl)
        shortenLnk.innerText = data.result.short_link
        shortenLnk.setAttribute("href", validUrl)
    } catch {
        originalLnk.innerText = 'Please add correct link'
        originalLnk.setAttribute("href", '#')
        shortenLnk.innerText = ''
        shortenLnk.setAttribute("href", '#')
    }
}


const copyBtnLink = document.getElementById('copyText')
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(shortenLnk.innerHTML);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

copyBtn.addEventListener('click', () => {
    copyContent()
    copyBtnLink.innerText = 'Copied'
    setTimeout(() => {
        copyBtnLink.innerText = 'Copy'
    }, 1000)
})


function validateURL(url) {
    const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    
    if(regex.test(url) == true) {
        error.classList.add('hidden')
        shortenContainer.classList.remove('invisible')
        return url
    }else {
        error.classList.remove('hidden')
    }

}
