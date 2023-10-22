// Переменные с баллами по модулям
const introductionScore = 90;
const gitScore = 85;
const jsScore = 95;

// Расчет среднего балла
const averageScore = (introductionScore + gitScore + jsScore) / 3;

// Имя и фамилия студента
const firstName = "Анжелика";
const lastName = "Пикулина";

// Вывод результата в консоль с использованием шаблонных строк
console.log(`Студент: ${firstName} ${lastName}`);
console.log(`Баллы по модулю "Введение": ${introductionScore}`);
console.log(`Баллы по модулю "Git": ${gitScore}`);
console.log(`Баллы по модулю "JS": ${jsScore}`);
console.log(`Средний балл: ${averageScore}`);