// hide and show menu panel
const menuPanel = {
    closeBtn: document.querySelector('.menu-panel .close'),
    menuBtn: document.querySelector('button.menu.menu-btn'),
    menu: document.querySelector('.menu-panel'),
    listen: () => {
        menuPanel.closeBtn.addEventListener('click', e => {
            e.target.parentNode.parentNode.classList.toggle('toggle');
        });
        menuPanel.menuBtn.addEventListener('click', e => {
            menuPanel.menu.classList.toggle('toggle');
        });
    }
}
menuPanel.listen();



const trello = {
    board: document.querySelector('.trello-board'),
    addCardBtn: document.querySelectorAll('.trello-card-list button.card-btn'),
    newListBtn: document.querySelector('button.add-list'),
    cardContainers: document.querySelectorAll('.trello-card-list .container'),
    cards: document.querySelectorAll('.trello-card-list .container .card'),
    draggedCard: null,

    create: {
        newCard: (e) => {
            const container = e.target.parentNode.querySelector('.container');
            const card = document.createElement('div');
            card.classList = 'card';
            card.setAttribute('draggable', true);
            const p = document.createElement('p');
            p.textContent = 'new card item';
            const i = document.createElement('i');
            i.classList = 'fa-solid fa-pen';
            card.appendChild(p);
            card.appendChild(i);
            container.appendChild(card);
        },
        newList: (e) => {
            const list = document.createElement('div');
            list.classList = 'trello-card-list';

            const listTitleContainer = document.createElement('div');
            listTitleContainer.classList = 'list-title-container';
                const listTitle = document.createElement('p');
                listTitle.textContent = 'NEW LIST';
                const icon = document.createElement('i');
                icon.classList = 'fa-solid fa-ellipsis';
            listTitleContainer.appendChild(listTitle)
            listTitleContainer.appendChild(icon)
            
            const container = document.createElement('div')
            container.classList = 'container';
            
            const cardBtn = document.createElement('button');
            cardBtn.classList = 'card-btn';
            cardBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add a card';

            list.appendChild(listTitleContainer)
            list.appendChild(container)
            list.appendChild(cardBtn)

            trello.board.appendChild(list)

            trello.resetDOM();
        },
    },

    resetDOM: () => {
        trello.addCardBtn = document.querySelectorAll('.trello-card-list button.card-btn');
        trello.cardContainers = document.querySelectorAll('.trello-card-list .container');
        trello.cards = document.querySelectorAll('.trello-card-list .container .card');
    },
    
    listen: () => {
        trello.addCardBtn.forEach((btn) => {
            btn.addEventListener('click', e => {
                trello.create.newCard(e);
            });
        });

        trello.newListBtn.addEventListener('click', e => {
            trello.create.newList();
        });

        for (let i = 0; i < trello.cards.length; i++) {
            const listItem = trello.cards[i];
            listItem.addEventListener('dragstart', () => {
                trello.draggedCard = listItem;
                setTimeout(() => {
                    listItem.classList.add('dragging');
                }, 0);
            });
            listItem.addEventListener('dragend', () => {
                setTimeout(() => {
                    trello.draggedCard.classList.remove('dragging');
                    trello.draggedCard = null;
                }, 0);
            });
    
            for (let j = 0; j < trello.cardContainers.length; j++) {
                const list = trello.cardContainers[j];
                
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
                    list.append(trello.draggedCard);
                    list.classList.remove('potential-drag');
                });
            }
        }
    }
}
trello.listen();


    // const cardContainers = document.querySelectorAll('.trello-card-list .container');
    // const cards = document.querySelectorAll('.trello-card-list .container .card');
    // let draggedCard = null;

    // for (let i = 0; i < cards.length; i++) {
    //     const listItem = cards[i];
    //     listItem.addEventListener('dragstart', () => {
    //         draggedCard = listItem;
    //         setTimeout(() => {
    //             listItem.classList.add('dragging');
    //         }, 0);
    //     });
    //     listItem.addEventListener('dragend', () => {
    //         setTimeout(() => {
    //             draggedCard.classList.remove('dragging');
    //             draggedCard = null;
    //         }, 0);
    //     });

    //     for (let j = 0; j < cardContainers.length; j++) {
    //         const list = cardContainers[j];
            
    //         list.addEventListener('dragover', e => {
    //             e.preventDefault();
    //         });

    //         list.addEventListener('dragenter', e => {
    //             e.preventDefault();
    //             list.classList.add('potential-drag');
    //         });

    //         list.addEventListener('dragexit', e => {
    //             e.preventDefault();
    //             list.classList.remove('potential-drag');
    //         })

    //         list.addEventListener('drop', e => {
    //             list.append(draggedCard);
    //             list.classList.remove('potential-drag');
    //         });
    //     }
    // }



// trello board
const trelloBoard = document.querySelector('.trello-board');
trelloBoard.addEventListener('click', e => {
    


    
});






