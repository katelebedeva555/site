document.getElementById('for_click').addEventListener('click', change_all);

function change_all(){
    const block4 = document.querySelector('.block4');
    const block5 = document.querySelector('.block5');
    const block6 = document.querySelector('.block6');
    const block7 = document.querySelector('.block7');
    const block9 = document.querySelector('.block9');
    
    if (block4.innerText === 'LEBEDEVA'){
        block4.innerText = 'ЛЕБЕДЕВА';
        block5.innerText = 'ЕКАТЕРИНА';
        block6.innerText = 'ПАВЛОВНА';
        block7.innerText = 'ЖЕН.';
        block9.innerText = 'ГОР.МОСКВА';
        document.getElementById('for_click').innerText = 'Изменить на латиницу';
    } else {
        block4.innerText = 'LEBEDEVA';
        block5.innerText = 'EKATERINA';
        block6.innerText = 'PAVLOVNA';
        block7.innerText = 'FEM.';
        block9.innerText = 'MOSCOW';
        document.getElementById('for_click').innerText = 'Изменить на кириллицу';
    }
}