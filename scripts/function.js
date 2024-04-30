
var container = document.querySelector('.container');

export function removeInputFieldsPrize() {
    // Удаляем поля ввода первой группы
    for (var i = 1; i <= 3; i++) {
        var input1 = document.querySelector('input[placeholder="Amount qualification lvl' + i + '"]');
        container.removeChild(input1);
    }

    // Удаляем поля ввода второй группы
    for (var j = 1; j <= 3; j++) {
        var input2 = document.querySelector('input[placeholder="Four Gift lvl' + j + '"]');
        container.removeChild(input2);
    }

    container.querySelectorAll('input1').forEach(function (input) {
        input1.remove();
    });

    container.querySelectorAll('input2').forEach(function (input) {
        input.remove();
    });
    
}

export function removeAllInputFields() {
    var container = document.querySelector('.container'); // Объявляем переменную container здесь
    container.querySelectorAll('.dynamic-input').forEach(function (input) {
        input.remove();
    });
    container.querySelectorAll('.label1').forEach(function (input) {
        input.remove();
    });
    container.querySelectorAll('.label2').forEach(function (input) {
        input.remove();
    });
    container.querySelectorAll('label').forEach(function (label) {
        label.remove();
    });
    container.querySelectorAll('br').forEach(function (br) {
        br.remove();
    });
}

export function createInputFields(count) {
    for (var i = 1; i < count; i++) {
        var inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        container.appendChild(inputContainer);

        var amountLabel = document.createElement('label');
        amountLabel.textContent = 'Amount prize:';
        amountLabel.classList.add('label1'); // Добавляем класс к label
        inputContainer.appendChild(amountLabel);

        var amountInput = document.createElement('input');
        amountInput.type = 'text';
        amountInput.classList.add('dynamic-input');
        amountInput.placeholder = 'First Prise Fond';
        inputContainer.appendChild(amountInput);

        var variableLabel = document.createElement('label');
        variableLabel.textContent = 'Variable:';
        variableLabel.classList.add('label2'); // Добавляем класс к label
        inputContainer.appendChild(variableLabel);

        var variableInput = document.createElement('input');
        variableInput.type = 'text';
        variableInput.classList.add('dynamic-input');
        variableInput.placeholder = 'Second Prise Fond';
        inputContainer.appendChild(variableInput);

        var variableLabel1 = document.createElement('label');
        variableLabel1.textContent = 'Variable:';
        variableLabel1.classList.add('label3'); // Добавляем класс к label
        inputContainer.appendChild(variableLabel1);

        var variableInput1 = document.createElement('input');
        variableInput1.type = 'text';
        variableInput1.classList.add('dynamic-input');
        variableInput1.placeholder = 'Third Prise Fond';
        inputContainer.appendChild(variableInput1);

        

        container.appendChild(document.createElement('br')); // Добавляем перенос строки
    }
}

export function createInputFieldsPrize() {
    // Создаем группу полей ввода 1
    for (var i = 1; i <= 3; i++) {
        var inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        container.appendChild(inputContainer);

        var amountLabel = document.createElement('label');
        amountLabel.textContent = 'Amount qualification lvl' + i + ':';
        amountLabel.classList.add('label1'); // Добавляем класс к label
        inputContainer.appendChild(amountLabel);

        var amountInput = document.createElement('input');
        amountInput.type = 'text';
        amountInput.classList.add('dynamic-input');
        amountInput.placeholder = 'Enter amount qualification lvl' + i;
        amountInput.style.marginBottom = '1px'; // Добавляем минимальный отступ вниз
        inputContainer.appendChild(amountInput);
    }

    // Создаем группу полей ввода 2
    for (var b = 1; b <= 3; b++) {
        var inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        container.appendChild(inputContainer);

        var variableLabel = document.createElement('label');
        variableLabel.textContent = 'Four Gift lvl' + b + ':';
        variableLabel.classList.add('label2'); // Добавляем класс к label
        inputContainer.appendChild(variableLabel);

        var variableInput = document.createElement('input');
        variableInput.type = 'text';
        variableInput.classList.add('dynamic-input');
        variableInput.placeholder = 'Enter Four Gift lvl' + b;
        variableInput.style.marginBottom = '1px'; // Добавляем минимальный отступ вниз
        inputContainer.appendChild(variableInput);
    }
}

export function createInputFieldsPrizeSpinBounty() {
    // Создаем группу полей ввода 1
    for (var i = 1; i <= 3; i++) {
        var inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        container.appendChild(inputContainer);

        var amountLabel = document.createElement('label');
        amountLabel.textContent = 'Amount qualification lvl' + i + ':';
        amountLabel.classList.add('label1'); // Добавляем класс к label
        inputContainer.appendChild(amountLabel);

        var amountInput = document.createElement('input');
        amountInput.type = 'text';
        amountInput.classList.add('dynamic-input');
        amountInput.placeholder = 'Enter amount qualification lvl' + i;
        amountInput.style.marginBottom = '1px'; // Добавляем минимальный отступ вниз
        inputContainer.appendChild(amountInput);
    }

    // Создаем группу полей ввода 2
    for (var b = 1; b <= 12; b++) {
        var inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        container.appendChild(inputContainer);

        var variableLabel = document.createElement('label');
        variableLabel.textContent = 'Four Gift lvl' + b + ':';
        variableLabel.classList.add('label2'); // Добавляем класс к label
        inputContainer.appendChild(variableLabel);

        var variableInput = document.createElement('input');
        variableInput.type = 'text';
        variableInput.classList.add('dynamic-input');
        variableInput.placeholder = 'Value Gift ' + b;
        variableInput.style.marginBottom = '1px'; // Добавляем минимальный отступ вниз
        inputContainer.appendChild(variableInput);
    }
}