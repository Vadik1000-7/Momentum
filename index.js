/*/ Метод поиска элементов
const time = document.querySelector('.time');
// Вывод текстовых данных на страницу
time.textContent = 'text';
console.log(time);

// Позволяет получить текущее время
/*const date0 = new Date();
console.log(date0);

// Из строки с датой и временем получить только время
/*const date1 = new Date();
const currentTime = date1.toLocaleTimeString();
console.log(currentTime);

// Время обновляется каждую секунду
function showTime() {
    
    setTimeout(showTime, 1000);
}
showTime();


// Получаем текущую дату
/*const date = new Date();
const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
const currentDate = date.toLocaleDateString('de-De', options);
console.log(currentDate);
*/

/////////////////////////  Дата и время ////////////////////////////

function clockTimer() // Предназначение функции: показывает время и дату, обновляет время каждую секунду, при перезагрузке страницы все сохраняется
{
    let date = new Date();
    
    let time = [date.getHours(),date.getMinutes(),date.getSeconds(), date.getDate(), date.getMonth()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds| [3] = Date
    let dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // days
    let months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // months
    let days = date.getDay();
    let month = date.getMonth();
    
    if(time[0] < 10){time[0] = "0"+ time[0];}
    if(time[1] < 10){time[1] = "0"+ time[1];}
    if(time[2] < 10){time[2] = "0"+ time[2];}
    
    let current_time = [time[0],time[1],time[2]].join(':');
    let clock = document.querySelector("time");
    let day = document.querySelector("date"); 
    
    clock.innerHTML = current_time;
    day.innerHTML = dayOfWeek[days] + ',' + ' ' + months[month] + ' ' + time[3];
    
    setTimeout("clockTimer()", 1000); // Обновляем время каждую секунду



/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
}
clockTimer()
// Функция выводит приветствие в зависимости от времени суток(час)
function getTimeDay(){
    const date = new Date();
    const hours = date.getHours();
    const text = document.querySelector('.greeting');
    if(hours > 0 && hours <= 6){
        return text.textContent = 'Good morning' // с 0 до 6 часов 
    }
        else if(hours < 12){
            return text.textContent = 'Good afternoon'// с 6 до 12 часов 
        }
        else if(hours < 18){
            return text.textContent = 'Good evening'// с 12 до 18 часов 
        }
        else if(hours < 24){
            return text.textContent = 'Good night'// с 18 до 0 часов 
        }
}

console.log(getTimeDay)
getTimeDay()




//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Функция для сохранения данных введеные пользователем
function setLocalStorage() {
    let name = document.querySelector('.name');
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

// Функция для вывода сохраненных данных пользователя на страницу
function getLocalStorage() {
    let name = document.querySelector('.name');
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////




function getTimeOfDay(){
    const date = new Date();
    const hours = date.getHours();
    if(hours > 6 && hours < 12){
        return  'morning'  // с 6 до 12 часов 
    }
        else if(hours < 18){
            return 'evening' // с 12 до 18 часов 
        }
        else if(hours < 24){
            return  'afternoon' // с 18 до 24 часов 
        } 
        else if(hours < 6){
            return  'night' // с 0 до 6 часов 
        }
}
console.log(getTimeOfDay)
getTimeOfDay()

function getRandomNum(){
    return Math.floor(Math.random() * 20) + 1;
};
console.log(getRandomNum);// здесь,  к примеру, выводится 2

function setBg(){
    let body = document.querySelector('body');//Вызываю селектор боди для установки фото бэкграунда
    const timeOfDay = getTimeOfDay();//Привязываю к новой константе функцию применяющую приветствия
    let img = new Image();
    let bgNum = String(getRandomNum()).padStart(2, '0');// Перевожу int в str значения, применяю рандомную картинку 
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;//добавляю переменные с временем дня и рандомным числом
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;//устанавливаю фоновую картинку
    };
    console.log(img.src)// проверяю ссылку на правильность
}
console.log(setBg)
setBg()
// а здесь выводится 01
/*document.querySelector('.slide-next').addEventListener('click', getSlideNext) = () => {
    return 
} 
*/
const slideNext = document.querySelector('.slide-next');// Вызываю селектор для переключения стрелки вправо
slideNext.addEventListener('click', getSlideNext);// события по клику правой стрелки


function getSlideNext(){
    let randomNum = getRandomNum();
    if(randomNum <= 20){
        randomNum += 1; //Если число не достигает 20 тогда оно прибавляется на единицу
    }
    else{
        randomNum = 1; //Если число достигло 20 тогда оно становится единицей
    };
    setBg();//Вызов функции с картинкой для бэкграунда
}
console.log(getSlideNext);





const slidePrev = document.querySelector('.slide-prev');// Вызываю селектор для переключения стрелки влево
slidePrev.addEventListener('click', getSlidePrev);// события по клику левой стрелки

function getSlidePrev() {
    let randomNum = getRandomNum();
    if(randomNum  >= 20){
        randomNum  -= 1; //Если число достигло 20 тогда оно уменьшается на единицу
    }
    else{
        randomNum  = 1; //Если число достигло 20 тогда оноуменьшается на единицу
    }
    setBg();//Вызов функции с картинкой для бэкграунда
}
console.log(getSlidePrev)


















