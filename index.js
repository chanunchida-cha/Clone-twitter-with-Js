const input = document.querySelector('.input')
const inputButton = document.querySelector('.input-button')
const content = document.querySelector('.content')


function postcontent(){
    Event.preventDefault();

    const post = document.createElement('div');
    post.classList.add('post')


    const newPost = document.createElement('div');
    newPost.innerHTML = input.nodeValue;
    newPost.classList.add('new-post')
    post.appendChild(newPost)


    const likeButton = document.createElement('button')
    likeButton.type = 'button'
    likeButton.classList.add('like-button')
    likeButton.innerHTML ='<i class="fas fa-heart-circle"></i>';

    const removeButton = document.createElement('')

}