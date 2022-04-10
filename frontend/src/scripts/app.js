import data from "./data.js"

const closer = document.querySelectorAll('.closer');

closer.forEach((closeBtn) => {
    closeBtn.addEventListener('click', e => {
        closeBtn.parentNode.parentNode.classList.toggle('toggle');
    })
})

const menuBtn = document.querySelector('button.menu.menu-btn');
const menu = document.querySelector('.menu-panel');
menuBtn.addEventListener('click', e => {
    menu.classList.add('toggle');
})


const cardContainers = document.querySelectorAll('.trello-card-list .container');
const cards = document.querySelectorAll('.trello-card-list .container .card');

let draggedCard = null;

for (let i = 0; i < cards.length; i++) {
    const listItem = cards[i];
    listItem.addEventListener('dragstart', () => {
        draggedCard = listItem;
        setTimeout(() => {
            listItem.classList.add('dragging');
        }, 0);
    });
    listItem.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedCard.classList.remove('dragging');
            draggedCard = null;
        }, 0);
    });

    for (let j = 0; j < cardContainers.length; j++) {
        const list = cardContainers[j];
        
        list.addEventListener('dragover', e => {
            e.preventDefault();
        });

        list.addEventListener('dragenter', e => {
            e.preventDefault();
            list.classList.add('potential-drag');
        });

        list.addEventListener('dragexit', e => {
            e.preventDefault();
            list.classList.remove('potential-drag');
        })

        list.addEventListener('drop', e => {
            list.append(draggedCard);
            list.classList.remove('potential-drag');
        });
    }
}



