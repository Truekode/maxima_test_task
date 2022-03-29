const createMyTable = (selector, config) => {
    $('<div>', {class: 'table__heading', text: config.name}).appendTo(selector);
    $('<div>', {class: 'table__desc', text: config.description}).appendTo(selector);
    $('<div>', {class: 'table__head'}).appendTo(selector);
    $('<div>', {class: 'table__row'}).appendTo('.table__head');
    config.structure.map(item => {
        $('<div>', {class: 'table__cell', text: item.title}).appendTo('.table__row');
    })
    $('<div>', {class: 'table__body'}).appendTo(selector);
    config.data.map((item) => {
        $('<div>', {class: 'table__row'}).appendTo('.table__body').append(`
                <div class="table__cell">${item.id}</div>
                <div class="table__cell">${item.username}</div>
                <div class="table__cell">${item.email}</div>
                <div class="table__cell">${item.phone}</div>
        `);
    })
}


fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data =>
    createMyTable("#table", {...myConfig, data})
)
