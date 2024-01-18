export type AnswerOption = {
    option: 'a' | 'b' | 'c';
    answ: string;
    correct: boolean;
}
export type TestQuestion = {
    id: number;
    text: string;
    options: Array<AnswerOption>;
}
export type TestQuestions = Array<TestQuestion>;

export const testQuestions = [
    {
        id: 1,
        text: 'Формула определения силы тока',
        options: [
            {
                option: 'a',
                answ: 'I = q*t',
                correct: true,
            },
            {
                option: 'b',
                answ: 'I = U*q',
                correct: false,
            },
            {
                option: 'c',
                answ: 'q = I*t',
                correct: false,
            },
        ]
    },
    {
        id: 2,
        text: 'Формула определения напряжения тока',
        options: [
            {
                option: 'a',
                answ: 'U = A*q',
                correct: true,
            },
            {
                option: 'b',
                answ: 'I = t*q',
                correct: false,
            },
            {
                option: 'c',
                answ: 'U = t*q',
                correct: false,
            },
        ]
    },
    {
        id: 3,
        text: 'Кинетическая энергия частицы равна удвоенной энергии покоя. Определить скорость частицы ',
        options: [
            {
                option: 'a',
                answ: '0,87 с',
                correct: true,
            },
            {
                option: 'b',
                answ: '0,817 с',
                correct: false,
            },
            {
                option: 'c',
                answ: '1,2 с',
                correct: false,
            },
        ]
    },
    {
        id: 4,
        text: 'При каком процессе увеличение абсолютной температуры идеального газа в два раза приводит к увеличению давления газа в 2 раза?',
        options: [
            {
                option: 'a',
                answ: 'изобарном',
                correct: false,
            },
            {
                option: 'b',
                answ: 'изохорном',
                correct: true,
            },
            {
                option: 'c',
                answ: 'изотермическом',
                correct: false,
            },
        ]
    },
    {
        id: 5,
        text: 'Как изменится сила кулоновского взаимодействия двух небольших заряженных шаров при уменьшении заряда каждого из них в 2 раза, если расстояние между ними остается неизменным? ',
        options: [
            {
                option: 'a',
                answ: 'уменьшится в 4 раза',
                correct: true,
            },
            {
                option: 'b',
                answ: 'уменьшится в 2 раза',
                correct: false,
            },
            {
                option: 'c',
                answ: 'увеличится в 4 раза',
                correct: false,
            },
        ]
    },
    {
        id: 6,
        text: 'пределить направление индукционного тока в рамке, если она находится в однородном магнитном поле, а величина магнитной индукции В уменьшается.',
        options: [
            {
                option: 'a',
                answ: 'против часовой стрелке',
                correct: false,
            },
            {
                option: 'b',
                answ: 'по часовой стрелке',
                correct: true,
            },
            {
                option: 'c',
                answ: 'не вызовет появления тока',
                correct: false,
            },
        ]
    },
    {
        id: 7,
        text: 'К источнику тока с ЭДС, равной 24 В, и внутренним сопротивлением 2 Ом подключили электрическое сопротивление 4 Ом. Определить силу тока в цепи. ',
        options: [
            {
                option: 'a',
                answ: '3 А',
                correct: false,
            },
            {
                option: 'b',
                answ: '12 А',
                correct: false,
            },
            {
                option: 'c',
                answ: '4 А',
                correct: true,
            },
        ]
    },
];