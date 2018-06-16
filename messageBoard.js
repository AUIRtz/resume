! function () {
    var view = document.querySelector('section.messages')
    var model = {
        init: function () {
            var APP_ID = 'Rcy5PfPWctJRK2vx3jblrVEI-gzGzoHsz'
            var APP_KEY = 'qNWzI3Ux7OeEhwwvRGHBCWId'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find() //Promise 对象
        },
        //创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({ //Promise 对象
                'name': name,
                'content': content
            })
        }
    }
    var controller = {
        view: null,
        model: null,
        messageBoard: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            
            this.messageBoard = view.querySelector('#messageBoard')
            this.form = view.querySelector('#postMessageForm')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            this.model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageBoard.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (x) => {
                x.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                this.messageBoard.appendChild(li)
            })
        }
    }
    controller.init(view, model)
}.call()