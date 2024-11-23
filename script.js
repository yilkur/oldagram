const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
]

const mainEl = document.getElementById('main')

const createPostHTML = (post, index) => (
  `
    <article>
      <header class="post-header">
        <img class="user-avatar" src="${post.avatar}" alt="Avatar of ${post.name}">
        <div>
          <p class="post-user bold">${post.name}</p>
          <p class="post-location">${post.location}</p>
        </div>
      </header>
      <img src="${post.post}" alt="Post by ${post.name}" class="post-img">
      <footer class="post-footer">
        <div class="post-icons">
          <img id="heart-${index}" class="icon-heart" src="images/icon-heart.png" alt="Like">
          <img src="images/icon-comment.png" alt="Comment">
          <img src="images/icon-dm.png" alt="Direct Message">
        </div>
        <p class="bold"><span id="post-likes-${index}">${post.likes}</span> likes</p>
        <p class="post-comment"><span class="bold">${post.username}</span> ${post.comment}</p>
      </footer>
    </article>
  `
)

const renderPosts = () => {
  const postsHTML = posts
    .map((post, index) => createPostHTML(post, index))
    .join('')
  mainEl.innerHTML = postsHTML
  attachLikeEventHandlers()
}

const attachLikeEventHandlers = () => {
  posts.forEach((post, index) => {
    const heartEl = document.getElementById(`heart-${index}`)
    const likesEl = document.getElementById(`post-likes-${index}`)

    heartEl.addEventListener('click', () => {
      post.likes++ // Increment the likes count in the post object
      likesEl.innerText = post.likes // Update the displayed likes
    })
  })
}

renderPosts()
