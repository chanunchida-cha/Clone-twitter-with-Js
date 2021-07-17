const input = document.querySelector('.input');
const tweetButton = document.querySelector('.tweet-button');
const content = document.querySelector('.content');



function postcontent(event) {
 event.preventDefault();
  //div
  const post = document.createElement('div');
  post.classList.add('post');

 
  //Li
  const newPost = document.createElement('h4');
  newPost.innerHTML = input.value;
  newPost.classList.add('todo-item');
  post.append(newPost)
  

  // button
  const likeButton = document.createElement('button');
  likeButton.type = 'button';
  likeButton.classList.add('like-button');
  likeButton.innerHTML = '<i class="fas fa-heart"></i>';
  likeButton.addEventListener('click', countlike);
  post.append(likeButton)

  const buttonremove = document.createElement('button');
  buttonremove.type = 'button';
  buttonremove.classList.add('remove-button');
  buttonremove.innerHTML = '<i class="fas fa-trash"></i>';
  buttonremove.addEventListener('click', removePost);
  post.append(buttonremove)


  //append
  
  content.prepend(post);


  //clear input
  input.value="";
}


function removePost(event) {
  event.target.parentNode.remove();

}


function countlike(){
  const count = 0;
  count++;
}



tweetButton.addEventListener('click', postcontent);

