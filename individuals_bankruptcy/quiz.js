'use strict'

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------Работа QUIZ--------------------------*/

    const quizTemplate = (data = [], dataLength, options) => {
        console.log(quizData);

        const { number, title } = data;
        const { nextBtnText } = options;
        const answers = data.answers.map(item => {
            return `
            <label>
                <input type="${item.type}" data-valid = 'false' name ='${data.answer_alias}' 
                value ='${item.type !== 'text' ? item.answer_title : ''}' class ="${item.type !== 'text' ? 'check_input' : 'text_input'}"
                > 
                <p> ${item.answer_title}</p>
            </label>
            `;
        });

        return `
        <div class="question">
            <div>
                ${number} из ${dataLength} 
            </div>
            <h3> ${title} </h3>
            <div class="checkbox_box">
                ${answers.join('')}
            </div>
            

        </div>
        <button type = 'button' class="btn next" data-next-btn >${nextBtnText}</button>
        
        `;
    };

    // <div class="btn_group">
    //     <button type='button' class="btn rev">НАЗАД</button>
    //     <button type='button' class="btn next" data-next-btn >${nextBtnText}</button>
    // </div>




    class Quiz {
        constructor(selector, data, options) {
            this.$el = document.querySelector(selector);
            this.options = options;
            this.data = data;
            this.counter = 0;
            this.dataLength = this.data.length;
            this.resultArray = [];
            this.tmp = {};
            this.init();
            this.events();
        }

        init() {
            console.log('init!');
            this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);
        }

        nextQuestion() {
            if (this.valid()) {
                if (this.counter + 1 < this.dataLength) {
                    this.counter++;
                    this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);

                    if (this.counter + 1 === this.dataLength) {
                        this.$el.insertAdjacentHTML('beforeend', `<button data-send class="btn next" >${this.options.sendBtnText}</button>`)
                        this.$el.querySelector('[data-next-btn]').remove()
                    }
                }
            }

        }

        valid() {
            let isValid = false;
            let elements = this.$el.querySelectorAll('input');
            elements.forEach(el => {
                switch (el.type) {
                    case 'text':
                        (el.value) ? isValid = true : el.classList.add('error');
                    case 'checkbox':
                        (el.checked) ? isValid = true : el.classList.add('error');
                    case 'radio':
                        (el.checked) ? isValid = true : el.classList.add('error');

                }
            })
            return isValid;
        };

        addToSend() {
            this.resultArray.push(this.tmp)
        };

        events() {
            this.$el.addEventListener('click', e => {
                if (e.target === document.querySelector('[data-next-btn]')) {
                    this.addToSend();
                    this.nextQuestion();
                }
                if (e.target === document.querySelector('[data-send')) {
                    this.send();
                }
            });

            this.$el.addEventListener('change', (e) => {
                if (e.target.tagName === 'INPUT') {
                    if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
                        let elements = this.$el.querySelectorAll('input');
                        elements.forEach(e => e.checked = false);
                    }

                    this.tmp = this.serialize(this.$el)
                    console.log(this.tmp)
                }
            })
        }

        send() {
            if (this.valid()) {
                const formData = new FormData();
                console.log(this.resultArray)
                for (let item of this.resultArray) {
                    for (let obj in item) {
                        formData.append(obj, item[obj].substring(0, item[obj].length - 1))
                    }
                }

                const response = fetch('mail.php', {
                    method: 'POST',
                    body: formData
                })
            }

        }
        serialize(form) {
            let field, s = {};
            let valueString = '';
            if (typeof form == 'object' && form.nodeName == "FORM") {
                let len = form.elements.length;
                for (let i = 0; i < len; i++) {
                    field = form.elements[i];

                    if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                        if (field.type == 'select-multiple') {
                            for (j = form.elements[i].options.length - 1; j >= 0; j--) {
                                if (field.options[j].selected)
                                    s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
                            }
                        } else if ((field.type != 'checkbox' && field.type != 'radio' && field.value) || field.checked) {
                            valueString += field.value + ',';

                            s[field.name] = valueString;


                        }
                    }
                }
            }
            return s
        }
    };




    window.quiz = new Quiz('.quiz', quizData, {
        nextBtnText: 'Далее',
        sendBtnText: 'Отправить'
    });


    /* /--------------------------Работа QUIZ--------------------------/*/





})