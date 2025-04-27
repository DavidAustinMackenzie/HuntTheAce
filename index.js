const cardObjecDefinitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'}
]

const cardBackImgPath = '/images/card-back-blue.png'

function createCard(cardItem){
    //create div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class and id inner card element    
    addClassToElement(cardElem,'card')
    addIdToElement(cardElem,cardItem.Id)

    //add class to inner card element
    addClassToElement(cardInnerElem,'card-inner')

    //add class to front card element
    addClassToElement(cardFrontElem,'card-front')
    
    //add class to back card element
    addClassToElement(cardBackElem,'card-back')

    //add src attribute and appropriate value to img element - back of card
    addSrcToImageElemt(cardBackElem,cardItem.imagePath)

    //assign class to back image element of back of card
    addClassToElement(cardBackElem,'card-img')

    //assign class to front image element of front of card
    addClassToElement(cardBackElem,'card-img')

    //test

}

function createElement(elemType){
    return document.createElement(elemType)
}

function addClassToElement(elem, className){
    elem.classList.add(className)
}

function addIdToElement(elem,id){
    elem.id = id
}

function addSrcToImageElemt(imgElem,src){
    imgElem.src = src
}