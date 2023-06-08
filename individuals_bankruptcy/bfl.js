'use strict'

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq_question'); //коллекция всех элементов вопросов
    const faqText = document.querySelectorAll('.faq_text'); //коллекция всех ответов
    const faqQuestionHeaders = document.querySelectorAll('.faq_question_header');// коллекция всех хедеров вопросов

    const minusEls = document.querySelectorAll('[data-minus]')

    faqText.forEach(el => {
        el.classList.add('hidden')
    });

    minusEls.forEach(el => {
        el.classList.add('visible')
    })


    faqQuestions.forEach(el => {
        el.addEventListener('click', e => {
            const curentText = el.querySelector('.faq_text');
            curentText.classList.toggle('hidden');
            const currentPlus = el.querySelector('[data-plus]');
            currentPlus.classList.toggle('rotade');
            const currentMinus = el.querySelector('[data-minus]');
            currentMinus.classList.add('rotade_');
            currentMinus.classList.toggle('visible');
            currentMinus.classList.add('rotade_');
        })
    })


})