addEventListener('DOMContentLoaded', function (){
    document.querySelector('#submit').disabled = true
    document.querySelector('#input').focus()
    
    document.querySelector('#input').onkeyup=()=>{
        if (document.querySelector('#input').value.length>1){
            document.querySelector('#submit').disabled = false;
            document.querySelector('h2').innerText = ' '

        }else{
            document.querySelector('#submit').disabled = true;
        }
    }
    document.querySelector('form').onsubmit = () => {

        let task = document.querySelector('#input').value;
        let contai = document.createElement('div')
        let li = document.createElement('li')

        li.innerText = task
        //const listes = document.querySelector('ol')
        //listes.append(li)
        const erase = document.createElement('button')
        erase.classList.add('added')
        erase.textContent = 'Delete task'
        const done = document.createElement('button')
        done.classList.add('taskadded')
        done.textContent = 'Task completed'
        contai.appendChild(li)
        contai.appendChild(done)
        contai.appendChild(erase)
        this.document.querySelector('ol').append(contai)
        
        document.querySelector('#input').value = ' ';
        document.querySelector('#submit').disabled = true;
        document.querySelector('#input').focus()

        return false
    }

    document.querySelector('.clear_all').onclick=()=>{
        document.querySelector('ol').innerText = ' '
        document.querySelector('h2').textContent = 'No Task Added'
        document.querySelector('#input').focus()

    }
    document.querySelector('ol').addEventListener('click', function (event){
        const item = event.target;
        if (item.classList[0]==='added'){
            const toDo = item.parentElement;
            toDo.classList.add('fall')
            toDo.addEventListener('transitionend',() => toDo.remove())
            

        }if (item.classList[0]==='taskadded'){
            let item = event.target;
            let para = item.parentElement;
            let sibli = item.previousElementSibling;
            sibli.classList.toggle('completed')
            sibli.addEventListener('transitionend', ()=> para.remove())

        }
    })
})