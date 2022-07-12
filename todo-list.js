let inputHeseg = document.querySelector('#input-text');
let addOut = document.querySelector('.add');
let arrheseg = [];
let id = 0;

// some function's ---------------------------------------------------

function kkkkkkqqqq() {
    id++;
    arrheseg.push(
        {
            text: inputHeseg.value,
            id: id,
        }
    )
    drawOut(arrheseg)
}

function outFunction(id){
    arrheseg = arrheseg.filter(doc => {
        return (
            doc.id != id
        )
    })
    drawOut(arrheseg)
}

function drawOut(arrheseg) {
    let outHtml = '';

    arrheseg.forEach(doc => {
        outHtml += `<div class="text-out" data-id=${doc.id}>
                        <div class="text">${doc.text}</div>
                        <button class="delete" onclick="outFunction(${doc.id})">Delete</button>
                    </div>`
    })
    document.querySelector('.out-heseg').innerHTML = outHtml;
    inputHeseg.value = '';
}

// function's end ====================================================================




addOut.addEventListener('click', ()=>{
    kkkkkkqqqq();
})
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const lala = inputHeseg.value;
        if (!lala === false) {
            kkkkkkqqqq()
        }
    }
})