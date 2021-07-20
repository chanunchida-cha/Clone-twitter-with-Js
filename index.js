const input = document.querySelector('.input');
const tweetButton = document.querySelector('.tweet-button');
const content = document.querySelector('.content');
const getlike = document.createElement('get-like')




function postcontent(event) {
 event.preventDefault();
  //div
  const post = document.createElement('div');
  post.classList.add('post');

 
  //text
  const newPost = document.createElement('h4');
  newPost.innerHTML = input.value;
  newPost.classList.add('new-post');
  post.append(newPost)
  
  //function like
  const countlike = document.createElement('h6');
  countlike.classList.add('count-like');
  post.append(countlike)
  let count=0;
  const likeButton = document.createElement('button');
  likeButton.type = 'button';
  likeButton.classList.add('like-button');
  likeButton.innerHTML = '<i class="fas fa-heart"></i>';

  likeButton.addEventListener('click', () =>{
    count++;
    const iconlike = document.createElement('button');
    iconlike.type = 'button'
    countlike.innerHTML = '<i class="fab fa-gratipay"></i>'+count;
    

  });
  post.append(likeButton)

 

  //function remove

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




tweetButton.addEventListener('click', postcontent);

