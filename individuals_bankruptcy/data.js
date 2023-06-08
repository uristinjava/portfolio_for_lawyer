const quizData = [
    {
        number: 1,
        title: 'Размер вашей задолженности',
        answer_alias: 'money',
        answers: [
            {
                answer_title: 'Менее 300 000 рублей',
                type: 'radio'
            },
            {
                answer_title: 'От 300 000 до 500 000 рублей',
                type: 'radio'
            },
            {
                answer_title: 'От 500 000 до 1 000 000 рублей',
                type: 'radio'
            },
            {
                answer_title: 'Более 1 000 000 рублей',
                type: 'radio'
            },

        ]
    },
    {
        number: 2,
        title: 'Какое у Вас имущество',
        answer_alias: 'property',
        answers: [
            {
                answer_title: 'Квартира, дом в котором я живу',
                type: 'checkbox'
            },
            {
                answer_title: 'Транспорт (автомоблиль и т.д.)',
                type: 'checkbox'
            },
            {
                answer_title: 'Дачный участок, и др. имущество',
                type: 'checkbox'
            },
            {
                answer_title: 'Ипотечное жилье',
                type: 'checkbox'
            },
            {
                answer_title: 'Доли в Уставном капитале Общества',
                type: 'checkbox'
            },


        ]
    },
    {
        number: 3,
        title: 'Сделки по продаже или дарению',
        answer_alias: 'dials',
        answers: [
            {
                answer_title: 'Я не продавал и не дарил имущество',
                type: 'checkbox'
            },
            {
                answer_title: 'Я Продавал имущество в течении трех лет',
                type: 'checkbox'
            },
            {
                answer_title: 'Дарил имущество дороже 1 млн. рублей',
                type: 'checkbox'
            },
            {
                answer_title: 'Свой вариант',
                type: 'text'
            },


        ]
    },
    {
        number: 4,
        title: 'Ваши контактные данные для передачи Вам анализа',
        answer_alias: 'contacts',
        answers: [

            {
                answer_title: 'Ваш контактный номер телефона',
                type: 'text'
            },
        ]
    },
    {
        number: 5,
        title: 'Получить Консультацию',
        answer_alias: 'согласие',
        answers: [
            // {
            //     answer_title: 'Ваше Имя',
            //     type: 'text'
            // },
            {
                answer_title: 'согласен на получение консультации и отправку данных',
                type: 'checkbox'
            },
        ]
    },
]