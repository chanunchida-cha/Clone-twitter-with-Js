const input = document.querySelector('.input')
const inputButton = document.querySelector('.input-button')
const content = document.querySelector('.content')




function postcontent(event){

    event.preventDefault();

    const post = document.createElement('div');
    post.classList.add('post')


    const newPost = document.createElement('div');
    newPost.innerHTML = input.value;
    newPost.classList.add('new-post')
    post.append(newPost)


    const likeButton = document.createElement('button')
    likeButton.type = 'button'
    likeButton.classList.add('like-button')
    likeButton.innerHTML ='<i class="fas fa-heart"></i>';
    // likeButton.addEventListener('click',like)
    post.append(likeButton)

    const removeButton = document.createElement('button')
    removeButton.type = 'button'
    removeButton.classList.add('remove-button')
    removeButton.innerHTML = '<i class="fas fa-trash"></i>'
    removeButton.addEventListener('click',removeTodo)
    post.append(removeButton)


    content.prepend(post)

    input.value="";

}

function removeTodo(event) {
    event.target.parentNode.remove();
  
  }
  

inputButton.addEventListener('click', postcontent)