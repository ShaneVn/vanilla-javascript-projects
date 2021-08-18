const blogList = document.getElementById("blog-list");
// const button = document.getElementById('btn')
const formSubmit = document.getElementById("new-post");
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
let postArr = []

const renderPost = () =>{
  let html = "";
  for (post of postArr) {
    html += `
       <h3>${post.title}</h3>
       <p>${post.body}</p>
       <hr />
      `;
    blogList.innerHTML = html;
  }
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((response) => response.json())
  .then((data) => {
    postArr = data.slice(0, 5);
    console.log(postArr)
    renderPost()
  });

formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = titleInput.value
  const PostBody = bodyInput.value
  const data = {
    title: postTitle,
    body: PostBody,
  };
  
  fetch('https://apis.scrimba.com/jsonplaceholder/posts', {method: 'post',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
}) 

  .then(response => response.json())
  .then(post => {

    postArr.unshift(post)
    renderPost()
    formSubmit.reset()
// another way to reset
// titleInput.value = ''
// bodyInput.value = ''

// another way to render post
    // blogList.innerHTML = `
    // <h3>${post.title} </h3>
    // <p>${post.body} </p>
    // <hr />
    // ${blogList.innerHTML}
    // `
  })




})
