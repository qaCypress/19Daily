import { removeInputFieldsPrize, removeAllInputFields, createInputFields, createInputFieldsPrize, createInputFieldsPrizeSpinBounty } from './scripts/function.js';

document.addEventListener('DOMContentLoaded', function () {
    var buttonStart = document.getElementById('buttonStart');
    var options = document.getElementById('options');
    var lotteryForm = document.getElementById('lottery-form');
    var tournamentForm = document.getElementById('tournament-form');
    var lotteryOptions = document.getElementById('lottery-options');
    var lotteryTypeSelect = document.getElementById('lottery-type');
    var lotteryTypeSelectCuracao = document.getElementById('optionsCuracao');

    options.addEventListener('change', function () {
        var value = this.value;

        lotteryTypeSelectCuracao.style.display = 'none';

        if (value === 'lottery') {
            lotteryForm.style.display = 'block';
            tournamentForm.style.display = 'none';
            lotteryOptions.style.display = 'block'; // Показываем второй выпадающий список при выборе "Lottery"
            lotteryTypeSelectCuracao.style.display = 'none';  // Скрываем второй выпадающий список при выборе "Select"

        } else if (value === 'tournament') {
            lotteryForm.style.display = 'none';
            tournamentForm.style.display = 'block';
            lotteryOptions.style.display = 'none'; // Скрываем второй выпадающий список при выборе "Tournament"
            lotteryTypeSelectCuracao.style.display = 'none';  // Скрываем второй выпадающий список при выборе "Select"
        }

         else {
            lotteryForm.style.display = 'none';
            tournamentForm.style.display = 'none';
            lotteryOptions.style.display = 'none';
            lotteryTypeSelectCuracao.style.display = 'none';  // Скрываем второй выпадающий список при выборе "Select"
        }
    });

    document.getElementById('back-button-lottery').addEventListener('click', function () {
        options.value = 'none';
        lotteryForm.style.display = 'none';
        lotteryTypeSelectCuracao.style.display = 'none';
        var container = document.querySelector('.container'); // Объявляем переменную container здесь
    container.querySelectorAll('.dynamic-input').forEach(function (input) {
        input.remove();
    });
    container.querySelectorAll('label').forEach(function (label) {
        label.remove();
    });
    container.querySelectorAll('br').forEach(function (br) {
        br.remove();
    });
    
    
    removeInputFieldsPrize();
    removeAllInputFields();

    buttonStart.style.display = "block";
    });

    document.getElementById('back-button-tournament').addEventListener('click', function () {
        options.value = 'none';
        tournamentForm.style.display = 'none';
        lotteryTypeSelectCuracao.style.display = 'none';
        var container = document.querySelector('.container'); // Объявляем переменную container здесь
    container.querySelectorAll('.dynamic-input').forEach(function (input) {
        input.remove();
    });
    container.querySelectorAll('label').forEach(function (label) {
        label.remove();
    });
    container.querySelectorAll('br').forEach(function (br) {
        br.remove();
    });
    

    removeInputFieldsPrize();
    removeInputFieldsPrize();

    buttonStart.style.display = "block";
    });

    // Добавление полей "Ticket Price", "Price Pool" и кнопки "Start" при выборе опции "1lvl"
    lotteryTypeSelect.addEventListener('change', function () {
        if (lotteryTypeSelect.value === '1lvl') {

            var inputFields = lotteryForm.querySelectorAll('.input, .start, .spacing');
            inputFields.forEach(function (field) {
                lotteryTypeSelectCuracao.style.display = "none";
                field.remove();
            });

            var ticketPriceInput = document.createElement('input');
            ticketPriceInput.type = 'text';
            ticketPriceInput.placeholder = 'Ticket Price';
            ticketPriceInput.classList.add('input');
            lotteryForm.appendChild(ticketPriceInput);
    
            var pricePoolInput = document.createElement('input');
            pricePoolInput.type = 'text';
            pricePoolInput.placeholder = 'Price Pool';
            pricePoolInput.classList.add('input');
            lotteryForm.appendChild(pricePoolInput);
    
            lotteryTypeSelectCuracao.style.display = "none";

            buttonStart.style.display = "block";

            // Добавляем отступ между элементами
            lotteryForm.appendChild(document.createElement('div')).classList.add('spacing');
            lotteryForm.appendChild(document.createElement('div')).classList.add('spacing');

        } 
        
        
        
        else if(lotteryTypeSelect.value === 'MultiLevel')

        {
            var inputFields = lotteryForm.querySelectorAll('.input, .start, .spacing');
            inputFields.forEach(function (field) {
                
                field.remove();
            });

            var ticketPriceInput = document.createElement('input');
            ticketPriceInput.type = 'text';
            ticketPriceInput.placeholder = 'Ticket Price';
            ticketPriceInput.classList.add('input');
            lotteryForm.appendChild(ticketPriceInput);
    
            var pricePoolInput = document.createElement('input');
            pricePoolInput.type = 'text';
            pricePoolInput.placeholder = 'Price Pool';
            pricePoolInput.classList.add('input');
            lotteryForm.appendChild(pricePoolInput);
    
            lotteryTypeSelectCuracao.style.display = "block";
            
            buttonStart.style.display = "block";

            // Добавляем отступ между элементами
            lotteryForm.appendChild(document.createElement('div')).classList.add('spacing');
            lotteryForm.appendChild(document.createElement('div')).classList.add('spacing');

        }
        
    
        else
        {
            // Удаляем поля "Ticket Price", "Price Pool" и кнопку "Start" при выборе другой опции
            var inputFields = lotteryForm.querySelectorAll('.input, .start, .spacing');
            inputFields.forEach(function (field) {
                lotteryTypeSelectCuracao.style.display = "none";
                field.remove();
            });
        }
    


        var container = document.querySelector('.container');

lotteryTypeSelectCuracao.addEventListener('change', function () {
    var selectedValue = this.value;

    // Удаляем предыдущие поля ввода, метки и элементы br, если они есть
    removeAllInputFields();

    // Создаем новые поля ввода в зависимости от выбранной опции
    if (selectedValue === 'SpinBounty/Magic') {
        createInputFieldsPrizeSpinBounty(3)
        createInputFields(2);
    } else if (selectedValue === 'AllRight') {
        createInputFieldsPrize(3)
        createInputFields(2);
    }
else if(selectedValue === 'LuckyBird')
{
    createInputFieldsPrize(3)
    createInputFields(2);
}

});

// Функция для удаления всех полей ввода, меток и элементов br

});


function openModal() {
    document.getElementById('myModal').style.display = 'block';
    setTimeout(closeModal, 2000);
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function openModal1() {
    document.getElementById('myModalSuccses').style.display = 'block';
    setTimeout(closeModal1, 2000);
}

function closeModal1() {
    document.getElementById('myModalSuccses').style.display = 'none';
}

document.getElementById('buttonStart').addEventListener('click', function() {
    var selectedOption = document.getElementById('options').value;

    if(selectedOption === `lottery`)
    {
        var lotterytype = document.getElementById('lottery-type').value;
        var lotteryTypeSelectCuracao1 = document.getElementById('optionsCuracao').value;
    }
    
    if (selectedOption === 'lottery' && lotterytype === `MultiLevel` && (lotteryTypeSelectCuracao1 === `AllRight` || lotteryTypeSelectCuracao1 === `LuckyBird`)) {

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function() {
                    
                    var accordionButtons = document.querySelectorAll('#Lottery_ticketPrices > div:not(:nth-child(0)) > div > h2 > button.accordion-button');
                    var buttonValues = [];
                    
                    accordionButtons.forEach(function(button) {
                        buttonValues.push(button.textContent.trim());
                    });
                    
                    return buttonValues;

                    
                }
            }, function(result) {
                var buttonValues = result[0].result;
        
                var ticketPriceInput = document.querySelector('input[placeholder="Ticket Price"]');

                var ticketPriceInput1 = ticketPriceInput.value;
                const regex = /([A-Z]+)\s(\d+)/g;
                
let match;
const formattedPrices = [];

while ((match = regex.exec(ticketPriceInput1)) !== null) {
  const currency = match[1];
  const amount = parseFloat(match[2]).toFixed(8);
  formattedPrices.push(`${currency} ${amount}`);
}

buttonValues.sort();
formattedPrices.sort();

// Вывод отсортированных массивов в консоль
console.log("Sorted buttonValues1:", buttonValues);
console.log("Sorted formattedPrices:", formattedPrices);

// Сравнение отсортированных массивов
const arraysAreEqual = JSON.stringify(buttonValues) === JSON.stringify(formattedPrices);

if (arraysAreEqual) {
    ticketPriceInput.style.background = 'lime';
  } else {
    ticketPriceInput.style.background = 'red'; // Сброс цвета
  }
            });

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function() {
                
                    var accordionButtons = document.querySelectorAll('#Lottery_prizePools > div:not(:nth-child(0)) > div > h2 > button.accordion-button');
                    var buttonValues = [];
                    
                    accordionButtons.forEach(function(button) {
                        buttonValues.push(button.textContent.trim());
                    });
                    
                    return buttonValues;
                }
            }, function(result) {
                var buttonValues = result[0].result;

var pricePoolInput = document.querySelector('input[placeholder="Price Pool"]');

var cleanedDataString = pricePoolInput.value;
// Используем регулярное выражение для извлечения валюты и суммы
const regex = /"([A-Z]+)": "([\d\s]+) ([^\"]+)"/g;
const matches = [...cleanedDataString.matchAll(regex)];

// Формируем объект с полученными значениями
const currencyValues = {};
matches.forEach(match => {
  const currency = match[1];
  const amount = match[2].replace(/\s/g, ''); // удаляем пробелы из суммы
  currencyValues[currency] = amount;
});

const currencyArray = Object.entries(currencyValues);

const formattedArray = currencyArray.map(item => {
    const currency = item[0];
    const amount = parseFloat(item[1]).toFixed(8); // Преобразуем сумму в число и форматируем с фиксированной точкой
    return `${currency} ${amount}`;
  });
  
  function compareCurrency(a, b) {
    const currencyA = a.split(' ')[0];
    const currencyB = b.split(' ')[0];
    return currencyA.localeCompare(currencyB);
  }

  formattedArray.sort(compareCurrency);
  buttonValues.sort(compareCurrency);

  console.log("Sorted buttonValues2:", buttonValues);
console.log("Sorted formattedPrizePool:", formattedArray);

  const arraysAreEqual = JSON.stringify(formattedArray) === JSON.stringify(buttonValues);

  if (arraysAreEqual) {
    pricePoolInput.style.background = 'lime';
  } else {
    pricePoolInput.style.background = 'red';
  }
  
            });

            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: function() {
                        var languages = ['en', 'tr', 'pl', 'ru', 'de', 'es', 'pt', 'fi', 'no', 'ja', 'fr', 'sv'];
                        var bodyElementTexts = {}; 
                        
                        languages.forEach(function(language) {
                            var elements = document.querySelectorAll(`#Lottery_translations_${language}_a2lix_translations-fields-tab`);
                            var bodyElements = document.querySelectorAll(`#Lottery_translations_${language}_description`);
                
                            if (bodyElements.length > 0) {
                                bodyElementTexts[language] = Array.from(bodyElements).map(function(element) {
                                    return element.innerText;
                                });
                            } else {
                                console.log(`Label elements not found for language ${language}.`);
                            }
                        });
                
                        return bodyElementTexts; 
                    }
                }, function processResult(result, formattedData) {

                    var processedData = []; // Переименованный массив для обработанных данных
                
                    result.forEach(function(bodyElement) {
                        var bodyElementTexts = bodyElement.result;
                        var bodyElementTextsArr = Object.values(bodyElementTexts).flat();
                
                        var curlyBraceRegex = /\{([^}]+)\}/g;
                
                        bodyElementTextsArr.forEach(function(text) {
                            var matches;
                            var extractedValues = [];
                
                            while ((matches = curlyBraceRegex.exec(text)) !== null) {
                                extractedValues.push(matches[1]);
                            }
                
                            var formattedValues = extractedValues.map(function(value) {
                                return value;
                            });
                
                            processedData.push(formattedValues); // Используем переименованный массив
                        
                        });
                    });
                
                    var inputElements = [
                        document.querySelector('input[placeholder="Enter amount qualification lvl1"]'),
                        document.querySelector('input[placeholder="Enter amount qualification lvl2"]'),
                        document.querySelector('input[placeholder="Enter amount qualification lvl3"]'),
                        document.querySelector('input[placeholder="Enter Four Gift lvl1"]'),
                        document.querySelector('input[placeholder="Enter Four Gift lvl2"]'),
                        document.querySelector('input[placeholder="Enter Four Gift lvl3"]')
                    ];
                
                    inputElements.forEach(function(inputElement) {
                        setInputBackgroundColor(inputElement, processedData); // Передаем переименованный массив
                    });
                
                    function setInputBackgroundColor(inputElement, formattedData) {
                        if (inputElement) {
                            var inputValue = inputElement.value.trim().replace(/{/,"").replace(/}/,"");
                    
                            var foundInSavedValues = true; // Устанавливаем начальное значение в true

formattedData.forEach(function(item) {
    console.log(item.toString());
    console.log(inputValue);

    if (!item.includes(inputValue)) { // Если inputValue не найдено в текущем элементе массива
        foundInSavedValues = false; // Устанавливаем значение в false
    }
});

if (!foundInSavedValues) {
    inputElement.style.backgroundColor = 'red'; // Если inputValue не найдено ни в одном элементе массива
} else {
    inputElement.style.backgroundColor = 'lime'; // Если inputValue найдено во всех элементах массива
}
                        }
                    }
                });
                
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        func: function() {
                            var elelelel = document.querySelector('.fa.fa-fw.fa-fa-solid.fa-award');
                            if (elelelel) {
                                elelelel.click();
                            } else {
                                console.error('Элемент не найден.');
                            }
                
                            var lppArr1 = [];
                
                            for (var i = 0; i <= 2; i++) {
                                var lpp = document.querySelector(`#Lottery_lotteryLevels_${i} > div:nth-child(11) > div`);
                                var lpptrue = lpp.querySelectorAll('.accordion-button.collapsed');
                
                                var lppArr = [];
                                lpptrue.forEach(function(lpptext) {
                                    lppArr.push(lpptext.textContent.trim());
                                });
                                lppArr1.push(lppArr);
                            }
                
                            console.log(lppArr1); // Вывод в консоль браузера для проверки
                
                            return lppArr1; // Возвращаем массив lppArr1 для передачи в функцию обратного вызова
                        }
                    }, function(resultArray) {
                        var lppArr1 = resultArray[0].result; // Получаем результат выполнения скрипта
                
                        // Обработка каждого поля отдельно
                        processField('input[placeholder="First Prise Fond"]', lppArr1[0]);
                        processField('input[placeholder="Second Prise Fond"]', lppArr1[1]);
                        processField('input[placeholder="Third Prise Fond"]', lppArr1[2]);
                    });
                });
                
                // Функция для обработки каждого поля
                function processField(inputSelector, lppArr) {
                    var ticketPriceInput = document.querySelector(inputSelector);
                    var ticketPriceInputTrue = ticketPriceInput;
                
                    const regex = /"([A-Z]+)":\s*"([\d\s.,]+?)\s*([^\d]+?)"/g;
                    regex.lastIndex = 0; // Сброс позиции lastIndex
                
                    let match;
                    const formattedPrices = [];
                
                    // Вызываем метод exec() внутри цикла, чтобы обработать все совпадения
                    while ((match = regex.exec(ticketPriceInput.value)) !== null) {
                        const currency = match[1];
                        if (currency !== "BTC") {
                            const amount = match[2].replace(/[\s.,]/g, '').replace(',', '.');
                            formattedPrices.push(`${currency} ${amount}`);
                        }
                    }
                
                    lppArr.sort();
                    formattedPrices.sort();
                
                    let formattedPrices12 = formattedPrices.map(item => {
                        let parts = item.split(' ');
                        let currency = parts[0];
                        let value = parseFloat(parts[1]).toFixed(0); // Устанавливаем количество десятичных знаков
                        return `${currency} ${value}`;
                    });
                
                    let formattedPrices123 = lppArr.map(item => {
                        let parts = item.split(' ');
                        let currency = parts[0];
                        let value = parseFloat(parts[1]).toFixed(0); // Устанавливаем количество десятичных знаков
                        return `${currency} ${value}`;
                    });
                
                    console.log('formattedPrices123:', formattedPrices123);
                    console.log('formattedPrices12:', formattedPrices12);
                
                    const arraysAreEqual = JSON.stringify(formattedPrices123) === JSON.stringify(formattedPrices12);
                
                    if (arraysAreEqual) {
                        ticketPriceInputTrue.style.background = 'lime'; // Если значения совпадают, устанавливаем зеленый цвет
                    } else {
                        ticketPriceInputTrue.style.background = 'red'; // Если значения не совпадают, устанавливаем красный цвет
                    }
                }  
            });
        });
    
    
    } 

    else if(selectedOption === 'lottery' && lotterytype === `MultiLevel` && lotteryTypeSelectCuracao1 === `SpinBounty/Magic`){
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function() {
                    
                    var accordionButtons = document.querySelectorAll('#Lottery_ticketPrices > div:not(:nth-child(0)) > div > h2 > button.accordion-button');
                    var buttonValues = [];
                    
                    accordionButtons.forEach(function(button) {
                        buttonValues.push(button.textContent.trim());
                    });
                    
                    return buttonValues;

                    
                }
            }, function(result) {
                var buttonValues = result[0].result;
        
                var ticketPriceInput = document.querySelector('input[placeholder="Ticket Price"]');

                var ticketPriceInput1 = ticketPriceInput.value;
                const regex = /((?!BTC)[A-Z]+)\s(\d+)/g;
                
let match;
const formattedPrices = [];

while ((match = regex.exec(ticketPriceInput1)) !== null) {
  const currency = match[1];
  const amount = parseFloat(match[2]).toFixed(8);
  formattedPrices.push(`${currency} ${amount}`);
}

buttonValues = buttonValues.filter(currency => !currency.startsWith('BTC'));

buttonValues.sort();
formattedPrices.sort();

// Вывод отсортированных массивов в консоль
console.log("Sorted buttonValues1:", buttonValues);
console.log("Sorted formattedPrices:", formattedPrices);

// Сравнение отсортированных массивов
const arraysAreEqual = JSON.stringify(buttonValues) === JSON.stringify(formattedPrices);

if (arraysAreEqual) {
    ticketPriceInput.style.background = 'lime';
  } else {
    ticketPriceInput.style.background = 'red'; // Сброс цвета
  }
            });

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function() {
                
                    var accordionButtons = document.querySelectorAll('#Lottery_prizePools > div:not(:nth-child(0)) > div > h2 > button.accordion-button');
                    var buttonValues = [];
                    
                    accordionButtons.forEach(function(button) {
                        buttonValues.push(button.textContent.trim());
                    });
                    
                    return buttonValues;
                }
            }, function(result) {
                var buttonValues = result[0].result;

var pricePoolInput = document.querySelector('input[placeholder="Price Pool"]');

var cleanedDataString = pricePoolInput.value;
// Используем регулярное выражение для извлечения валюты и суммы
const regex = /"((?!BTC)[A-Z]+)": "([\d\s]+) ([^\"]+)"/g;
const matches = [...cleanedDataString.matchAll(regex)];

// Формируем объект с полученными значениями
const currencyValues = {};
matches.forEach(match => {
  const currency = match[1];
  const amount = match[2].replace(/\s/g, ''); // удаляем пробелы из суммы
  currencyValues[currency] = amount;
});

const currencyArray = Object.entries(currencyValues);

const formattedArray = currencyArray.map(item => {
    const currency = item[0];
    const amount = parseFloat(item[1]).toFixed(8); // Преобразуем сумму в число и форматируем с фиксированной точкой
    return `${currency} ${amount}`;
  });
  
  function compareCurrency(a, b) {
    const currencyA = a.split(' ')[0];
    const currencyB = b.split(' ')[0];
    return currencyA.localeCompare(currencyB);
  }
  buttonValues = buttonValues.filter(currency => !currency.startsWith('BTC'));

  formattedArray.sort(compareCurrency);
  buttonValues.sort(compareCurrency);

  console.log("Sorted buttonValues2:", buttonValues);
console.log("Sorted formattedPrizePool:", formattedArray);

  const arraysAreEqual = JSON.stringify(formattedArray) === JSON.stringify(buttonValues);

  if (arraysAreEqual) {
    pricePoolInput.style.background = 'lime';
  } else {
    pricePoolInput.style.background = 'red';
  }
  
            });

            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: function() {
                        var languages = ['en', 'tr', 'pl', 'ru', 'de', 'es', 'pt', 'fi', 'no', 'ja', 'fr', 'sv'];
                        var bodyElementTexts = {}; 
                        
                        languages.forEach(function(language) {
                            var elements = document.querySelectorAll(`#Lottery_translations_${language}_a2lix_translations-fields-tab`);
                            var bodyElements = document.querySelectorAll(`#Lottery_translations_${language}_description`);
                
                            if (bodyElements.length > 0) {
                                bodyElementTexts[language] = Array.from(bodyElements).map(function(element) {
                                    return element.innerText;
                                });
                            } else {
                                console.log(`Label elements not found for language ${language}.`);
                            }
                        });
                
                        return bodyElementTexts; 
                    }
                }, function processResult(result, formattedData) {

                    var processedData = []; // Переименованный массив для обработанных данных
                
                    result.forEach(function(bodyElement) {
                        var bodyElementTexts = bodyElement.result;
                        var bodyElementTextsArr = Object.values(bodyElementTexts).flat();
                
                        var curlyBraceRegex = /\{([^}]+)\}/g;
                
                        bodyElementTextsArr.forEach(function(text) {
                            var matches;
                            var extractedValues = [];
                
                            while ((matches = curlyBraceRegex.exec(text)) !== null) {
                                extractedValues.push(matches[1]);
                            }
                
                            var formattedValues = extractedValues.map(function(value) {
                                return value;
                            });
                
                            processedData.push(formattedValues); // Используем переименованный массив
                        
                        });
                    });
                
                    var inputElements = [
                        document.querySelector('input[placeholder="Enter amount qualification lvl1"]'),
                        document.querySelector('input[placeholder="Enter amount qualification lvl2"]'),
                        document.querySelector('input[placeholder="Enter amount qualification lvl3"]'),
                        document.querySelector('input[placeholder="Value Gift 1"]'),
                        document.querySelector('input[placeholder="Value Gift 2"]'),
                        document.querySelector('input[placeholder="Value Gift 3"]'),
                        document.querySelector('input[placeholder="Value Gift 4"]'),
                        document.querySelector('input[placeholder="Value Gift 5"]'),
                        document.querySelector('input[placeholder="Value Gift 6"]'),
                        document.querySelector('input[placeholder="Value Gift 7"]'),
                        document.querySelector('input[placeholder="Value Gift 8"]'),
                        document.querySelector('input[placeholder="Value Gift 9"]'),
                        document.querySelector('input[placeholder="Value Gift 10"]'),
                        document.querySelector('input[placeholder="Value Gift 11"]'),
                        document.querySelector('input[placeholder="Value Gift 12"]')
                    ];
                
                    inputElements.forEach(function(inputElement) {
                        setInputBackgroundColor(inputElement, processedData); // Передаем переименованный массив
                    });
                
                    function setInputBackgroundColor(inputElement, formattedData) {
                        if (inputElement) {
                            var inputValue = inputElement.value.trim().replace(/{/,"").replace(/}/,"").replace(/  /," ").replace(/&nbsp;/," ");
                    
                            var foundInSavedValues = true; // Устанавливаем начальное значение в true

                            formattedData.forEach(function(item) {
                                item = item.map(function(value) {
                                    return value.trim().split(/\s+/).join(' ').replace(/&nbsp;/," ").replace(/  /," ").replace(/   /," ");
                                });
                                
                                console.log("Item from array:", item.toString()); // Выводим текущий элемент массива в консоль
                                
                                console.log("Input value:", inputValue); // Выводим значение из поля ввода в консоль
                                
                                if (!item.includes(inputValue)) {
                                    foundInSavedValues = false;
                                }
                            });

if (!foundInSavedValues) {
    inputElement.style.backgroundColor = 'red'; // Если inputValue не найдено ни в одном элементе массива
} else {
    inputElement.style.backgroundColor = 'lime'; // Если inputValue найдено во всех элементах массива
}
                        }
                    }
                
                });

                
                chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    chrome.scripting.executeScript({
                        target: { tabId: tabs[0].id },
                        func: function() {
                            var elelelel = document.querySelector('.fa.fa-fw.fa-fa-solid.fa-award');
                            if (elelelel) {
                                elelelel.click();
                            } else {
                                console.error('Элемент не найден.');
                            }
                
                            var lppArr1 = [];
                
                            for (var i = 0; i <= 2; i++) {
                                var lpp = document.querySelector(`#Lottery_lotteryLevels_${i} > div:nth-child(11) > div`);
                                var lpptrue = lpp.querySelectorAll('.accordion-button.collapsed');
                
                                var lppArr = [];
                                lpptrue.forEach(function(lpptext) {
                                    lppArr.push(lpptext.textContent.trim());
                                });
                                lppArr1.push(lppArr);
                            }
                
                            console.log(lppArr1); // Вывод в консоль браузера для проверки
                
                            return lppArr1; // Возвращаем массив lppArr1 для передачи в функцию обратного вызова
                        }
                    }, function(resultArray) {
                        var lppArr1 = resultArray[0].result; // Получаем результат выполнения скрипта
                
                        // Обработка каждого поля отдельно
                        processField('input[placeholder="First Prise Fond"]', lppArr1[0]);
                        processField('input[placeholder="Second Prise Fond"]', lppArr1[1]);
                        processField('input[placeholder="Third Prise Fond"]', lppArr1[2]);
                    });
                });
                
                // Функция для обработки каждого поля
                function processField(inputSelector, lppArr) {
                    var ticketPriceInput = document.querySelector(inputSelector);
                    var ticketPriceInputTrue = ticketPriceInput;
                
                    const regex = /"((?!BTC)[A-Z]+)":\s*"([\d\s.,]+?)\s*([^\d]+?)"/g;
                    regex.lastIndex = 0; // Сброс позиции lastIndex
                
                    let match;
                    const formattedPrices = [];
                
                    // Вызываем метод exec() внутри цикла, чтобы обработать все совпадения
                    while ((match = regex.exec(ticketPriceInput.value)) !== null) {
                        const currency = match[1];
                        if (currency !== "BTC") {
                            const amount = match[2].replace(/[\s.,]/g, '').replace(',', '.');
                            formattedPrices.push(`${currency} ${amount}`);
                        }
                    }
                
                    lppArr = lppArr.filter(currency => !currency.startsWith('BTC'));

                    lppArr.sort();
                    formattedPrices.sort();
                
                    let formattedPrices12 = formattedPrices.map(item => {
                        let parts = item.split(' ');
                        let currency = parts[0];
                        let value = parseFloat(parts[1]).toFixed(0); // Устанавливаем количество десятичных знаков
                        return `${currency} ${value}`;
                    });
                
                    let formattedPrices123 = lppArr.map(item => {
                        let parts = item.split(' ');
                        let currency = parts[0];
                        let value = parseFloat(parts[1]).toFixed(0); // Устанавливаем количество десятичных знаков
                        return `${currency} ${value}`;
                    });
                
                    console.log('formattedPrices123:', formattedPrices123);
                    console.log('formattedPrices12:', formattedPrices12);
                
                    const arraysAreEqual = JSON.stringify(formattedPrices123) === JSON.stringify(formattedPrices12);
                
                    if (arraysAreEqual) {
                        ticketPriceInputTrue.style.background = 'lime'; // Если значения совпадают, устанавливаем зеленый цвет
                    } else {
                        ticketPriceInputTrue.style.background = 'red'; // Если значения не совпадают, устанавливаем красный цвет
                    }
                }  
            });
        });
    }

    else if(selectedOption === 'lottery' && lotterytype === `1lvl`){
        
        
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function() {
                    
                    var accordionButtons = document.querySelectorAll('#Lottery_ticketPrices > div:not(:nth-child(0)) > div > h2 > button.accordion-button');
                    var buttonValues = [];
                    
                    accordionButtons.forEach(function(button) {
                        buttonValues.push(button.textContent.trim());
                    });
                    
                    return buttonValues;

                    
                }
            }, function(result) {
                var buttonValues = result[0].result;
                      
                var ticketPriceInput = document.querySelector('input[placeholder="Ticket Price"]');
                var ticketPriceInput1 = ticketPriceInput.value;
              
                const regex = /"([A-Z]+)": "([\d\s]+) ([^\"]+)"/g;
                const matches = [...ticketPriceInput1.matchAll(regex)];
                
                const currencyValues = {};
                matches.forEach(match => {
                  const currency = match[1];
                  if (currency !== 'BTC') { // Пропускаем валюту BTC
                    const amount = match[2].replace(/\s/g, ''); // удаляем пробелы из суммы
                    currencyValues[currency] = amount;
                  }
                });
              
                const currencyArray = Object.entries(currencyValues);
              
                const filteredArray = currencyArray.filter(item => item[0] !== 'BTC'); // Фильтруем массив, исключая валюту BTC
              
                const formattedArray = filteredArray.map(item => {
                  const currency = item[0];
                  const amount = parseFloat(item[1]).toFixed(8); // Преобразуем сумму в число и форматируем с фиксированной точкой
                  return `${currency} ${amount}`;
                });
              
                function compareCurrency(a, b) {
                  const currencyA = a.split(' ')[0];
                  const currencyB = b.split(' ')[0];
                  return currencyA.localeCompare(currencyB);
                }
              
                formattedArray.sort(compareCurrency);
                buttonValues = buttonValues.filter(value => value.split(' ')[0] !== 'BTC'); // Фильтруем buttonValues, исключая валюту BTC
                buttonValues.sort(compareCurrency);
              
                console.log("Sorted buttonValues2:", buttonValues);
                console.log("Sorted formattedTicketPrice:", formattedArray);
              
                // Сравнение отсортированных массивов
                const arraysAreEqual = JSON.stringify(formattedArray) === JSON.stringify(buttonValues);
              
                if (arraysAreEqual) {
                  ticketPriceInput.style.background = 'lime';
                } else {
                  ticketPriceInput.style.background = 'red'; // Сброс цвета
                }
              });

              chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: function() {
                    var accordionButtons = document.querySelectorAll('#Lottery_prizePools > div:not(:nth-child(0)) > div > h2 > button.accordion-button');
                    var buttonValues = [];
                    
                    accordionButtons.forEach(function(button) {
                        buttonValues.push(button.textContent.trim());
                    });
                    
                    return buttonValues;
                }
            }, function(result) {
                var buttonValues = result[0].result;
            
                var pricePoolInput = document.querySelector('input[placeholder="Price Pool"]');
                var cleanedDataString = pricePoolInput.value;
            
                const regex = /"([A-Z]+)": "([\d\s]+) ([^\"]+)"/g;
                const matches = [...cleanedDataString.matchAll(regex)];
            
                const currencyValues = {};
            
                matches.forEach(match => {
                    const currency = match[1];
                    if (currency !== 'BTC') { // Пропускаем валюту BTC
                        const amount = match[2].replace(/\s/g, ''); // удаляем пробелы из суммы
                        currencyValues[currency] = amount;
                    }
                });
            
                const currencyArray = Object.entries(currencyValues);
            
                const formattedArray = currencyArray.map(item => {
                    const currency = item[0];
                    const amount = parseFloat(item[1]).toFixed(8); // Преобразуем сумму в число и форматируем с фиксированной точкой
                    return `${currency} ${amount}`;
                });
            
                function compareCurrency(a, b) {
                    const currencyA = a.split(' ')[0];
                    const currencyB = b.split(' ')[0];
                    return currencyA.localeCompare(currencyB);
                }
            
                formattedArray.sort(compareCurrency);
                buttonValues = buttonValues.filter(value => value.split(' ')[0] !== 'BTC'); // Фильтруем buttonValues, исключая валюту BTC
                buttonValues.sort(compareCurrency);
            
                console.log("Sorted buttonValues2:", buttonValues);
                console.log("Sorted formattedPrizePool:", formattedArray);
            
                const arraysAreEqual = JSON.stringify(formattedArray) === JSON.stringify(buttonValues);
            
                if (arraysAreEqual) {
                    pricePoolInput.style.background = 'lime';
                } else {
                    pricePoolInput.style.background = 'red';
                }
            
  
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    function: function() {
        var languages = ['en', 'tr', 'pl', 'ru', 'de', 'es', 'pt', 'fi', 'no', 'ja', 'fr', 'sv','bn','az'];
        var bodyElementTexts = {}; 
        
        languages.forEach(function(language) {
            var elements = document.querySelectorAll(`#Lottery_translations_${language}_a2lix_translations-fields-tab`);
            var bodyElements = document.querySelectorAll(`#Lottery_translations_${language}_description`);

            if (bodyElements.length > 0) {
                bodyElementTexts[language] = Array.from(bodyElements).map(function(element) {
                    return element.innerText;
                });
            } else {
                console.log(`Label elements not found for language ${language}.`);
            }
        });

        return bodyElementTexts; 
    }
}, function processResult(result, formattedData) {

    var processedData = []; // Переименованный массив для обработанных данных

    result.forEach(function(bodyElement) {
        var bodyElementTexts = bodyElement.result;
        var bodyElementTextsArr = Object.values(bodyElementTexts).flat();

        var curlyBraceRegex = /\{([^}]+)\}/g;

        bodyElementTextsArr.forEach(function(text) {
            var matches;
            var extractedValues = [];

            while ((matches = curlyBraceRegex.exec(text)) !== null) {
                extractedValues.push(matches[1]);
            }

            var formattedValues = extractedValues.map(function(value) {
                return value;
            });

            processedData.push(formattedValues); // Используем переименованный массив
        
        });
    });

    var inputElements = [
        document.querySelector('input[placeholder="Ticket Price"]'),
        document.querySelector('input[placeholder="Price Pool"]')
    ];

    inputElements.forEach(function(inputElement) {
        setInputBackgroundColor(inputElement, processedData); // Передаем переименованный массив
    });

    function setInputBackgroundColor(inputElement, formattedData) {
        if (inputElement) {
            var inputValue = inputElement.value.trim().replace(/{/,"").replace(/}/,"");
    
            var foundInSavedValues = true; // Устанавливаем начальное значение в true

formattedData.forEach(function(item) {
console.log(item.toString());
console.log(inputValue);

if (!item.includes(inputValue)) { // Если inputValue не найдено в текущем элементе массива
foundInSavedValues = false; // Устанавливаем значение в false
}
});

if (!foundInSavedValues) {
inputElement.style.backgroundColor = 'red'; // Если inputValue не найдено ни в одном элементе массива
} else {
inputElement.style.backgroundColor = 'lime'; // Если inputValue найдено во всех элементах массива
}
        }
    }

});
            });
    
});
}















    else if (selectedOption === 'tournament') {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: function() {
                var accordionButtons = document.querySelectorAll('button.accordion-button');
                var buttonValues = [];

                accordionButtons.forEach(function(button) {
                    buttonValues.push(button.textContent.trim());
                });

                return buttonValues;
            }
        }, function(result) {
            var buttonValues = result[0].result;
var ticketPriceInput = document.querySelector('input[placeholder="Currencies"]');
var ticketPriceInput1 = ticketPriceInput.value;

// Заменяем все запятые на точки в строке ticketPriceInput1
ticketPriceInput1 = ticketPriceInput1.replace(/,/g, '.');

const regex = /([A-Z]+)\s+(\d+(\.\d+)?)/g;
let match;
const currencies = [];
const amounts = [];

while ((match = regex.exec(ticketPriceInput1)) !== null) {
    const currency = match[1];
    const amount = parseFloat(match[2]).toFixed(8); // Преобразуем число в строку с 8 знаками после запятой

    // Сохраняем суммы в отдельный массив
    amounts.push(amount);
}

// Приведение массива buttonValues к формату "сумма"
const formattedButtonValues = buttonValues.map(item => parseFloat(item.split(' ')[0]).toFixed(8));

// Сортировка отформатированных массивов
amounts.sort();
formattedButtonValues.sort();

// Вывод отсортированных массивов в консоль
console.log("Sorted buttonValues1:", formattedButtonValues);
console.log("Sorted formattedPrices:", amounts);

// Сравнение отсортированных массивов
const arraysAreEqual = JSON.stringify(formattedButtonValues) === JSON.stringify(amounts);

// Установка цвета фона в зависимости от результата сравнения
if (arraysAreEqual) {
    ticketPriceInput.style.background = 'lime';
} else {
    ticketPriceInput.style.background = 'red'; // Сброс цвета
}
        });

        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: function() {
                var buttonElement = document.querySelector('.fa.fa-fw.fa-fa-solid.fa-earth-europe');
                if (buttonElement) {
                    buttonElement.click();
                } 
        
                var bodyElementTexts = {};
        
                var languagess1 = ['en', 'tr', 'pl', 'ru', 'de', 'es', 'pt', 'fi', 'no', 'ja', 'fr', 'sv', 'bn', 'az', 'uz'];
                            
                var buttonElementasd = document.querySelector('#header-logo > a > span.logo-custom > b');
                console.log(buttonElementasd.textContent);
                
                languagess1.forEach(function(language) {
                    var desk = document.querySelectorAll(`#Tournament_translations_${language}_description`);
        
                    if (desk.length > 0) {
                        bodyElementTexts[language] = Array.from(desk).map(function(element) {
                            return element.innerText;
                        });
                    } else {
                        console.log(`Label elements not found for language ${language}.`);
                    }
                });
        
                return bodyElementTexts;
            }
        }, function(result) {
            if (result && result.length > 0 && result[0].result) {
                var bodyElementTexts = result[0].result;
                var bodyElementTextsArr = Object.values(bodyElementTexts).flat();
            } 
            
            var inputElements = [
                document.querySelector('input[placeholder="Price Pool"]')
            ];
        
            inputElements.forEach(function(inputElement) {
                setInputBackgroundColor(inputElement, bodyElementTextsArr);
        
                function setInputBackgroundColor(inputElement, bodyElementTextsArr) {
                    if (inputElement && bodyElementTextsArr) {
                        var inputValue = inputElement.value.trim().toString();
                        inputValue = inputValue.replace(/ {2,}/g, ' '); // Преобразуем в строку
                        var containsValue = true; // Предполагаем, что inputValue присутствует во всех элементах массива
                        
                        for (var i = 0; i < bodyElementTextsArr.length; i++) {
                            console.log(bodyElementTextsArr)
                            console.log(inputValue)
                            if (!bodyElementTextsArr[i].includes(inputValue.toString())) { // Преобразуем в строку перед сравнением
                                containsValue = false; // Если inputValue отсутствует в текущем элементе, изменяем флаг на false
                                break; // Выходим из цикла, так как уже известно, что inputValue отсутствует в массиве
                            }
                        }
                        
                        if (containsValue) {
                            inputElement.style.backgroundColor = 'lime';
                        } else {
                            inputElement.style.backgroundColor = 'red';
                        }
                    }
                }
            });
        });
    });

} else {
    openModal();
}

});
});