let shoppingList = [{
        name: 'milk',
        quantity: 3,
        isBought: true
    },
    {
        name: 'apple',
        quantity: 1,
        isBought: false
    },
    {
        name: 'eggs',
        quantity: 10,
        isBought: true
    }

]

for (let i = 0; i < shoppingList.length; i++) {
    let boughtString = shoppingList[i].isBought ? ' is bought ' : ' is not bought ';
    console.log(shoppingList[i].name + boughtString);
}
shoppingList.sort(function(a) {
    if (!a.isBought) {
        return 1;
    } else { return -1; }
})

let shopItem = {
    name: 'apple',
    quantity: 5,
    isBought: true,
}

for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === shopItem.name) {
        shoppingList[i].quantity += shopItem.quantity
    } else shoppingList.push(shopItem);
    let boughtString = shoppingList[i].isBought ? ' is bought ' : ' is not bought ';
    console.log(shoppingList[i]);
}

let productIsBought = prompt("что купили?");
for (let i = 0; i < list.length; i++) {
    if (shoppingList[i].name == productIsBought) {
        shoppingList[i].isBought = true;
        break;
    }
}

const shoppingListResult = shoppingList.filter(function(element) {
    if (element.name === shopItem.name) {
        console.log(element.name === shopItem.name);
        element.quantity += shopItem.quantity;
        return;
    } else if (element.name !== shopItem.name) {
        let shoppingListName = shoppingList.name;
        shoppingList.indexOf(shopItem.name) !== -1;
        return;
    }
});


let beetroot_auditory = [
    { classroom: "big_room", seats: 15, course: "designer" },
    { classroom: "small_room", seats: 10, course: "front_end" },
    { classroom: "cabinet", seats: 20, course: "english" }
];

let group = [
    { name: "group_designer", quantity_students: 12, course: "designer" },
    { name: "group_front", quantity_students: 11, course: "front_end" },
    { name: "group_english", quantity_students: 19, course: "english" }
];

for (i = 0; i < beetroot_auditory.length; i++) {
    console.log(beetroot_auditory[i]);
}

let auditory_cource = prompt("введите название курса");
for (i = 0; i < beetroot_auditory.length; i++) {
    if (auditory_cource == beetroot_auditory[i].course) {
        console.log('находится в аудитории ' + beetroot_auditory[i].classroom)
    }
}

let find_group = prompt("введите группу");
for (i = 0; i < group.length; i++) {
    if (find_group == group[i].name) {
        let a = group[i].quantity_students;
        console.log(a);
        for (i = 0; i < beetroot_auditory.length; i++) {
            if (a <= beetroot_auditory[i].seats) {
                console.log(`подходящие удитории для введенной группы 
                 ${beetroot_auditory[i].classroom}`);
            }
        }
    }
}

beetroot_auditory.sort((a, b) => b.seats - a.seats);


function sort_classroom(a, b) {
    if (a.classroom > b.classroom)
        return 1;
    if (a.classroom < b.classroom)
        return -1;
    else return 0;
}
beetroot_auditory.sort(sort_classroom);


let styles = [
    { 'color': '#555' },
    { 'font-size': '24px' },
]

let stylesOutput = '';
let text1 = '1234rf';
let stylesString = styles.map(el => {
    styleKey = Object.keys(el)[0];
    console.log(el[styleKey]);
    stylesOutput += `${styleKey} : ${el[styleKey]};`
})

function renderParagraph(styles, text) {
    let stylesOutput = '';
    console.log(text);
    styles.map(el => {
        styleKey = Object.keys(el)[0];
        console.log(el[styleKey]);
        stylesOutput += `${styleKey} : ${el[styleKey]};`
    })
    let paragraph = `<p style="${stylesOutput}"> ${text} </p>`
    document.write(paragraph);
}
renderParagraph(styles, text1);