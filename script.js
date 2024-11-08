// Referencia os elementos do DOM
const postTitle = document.getElementById('post-title');
const postContent = document.getElementById('post-content');
const createPostBtn = document.getElementById('create-post');
const postsContainer = document.getElementById('posts');

// Carrega os posts salvos ao carregar a página
document.addEventListener('DOMContentLoaded', loadPosts);

// Função para criar um novo post
function createPost() {
    const title = postTitle.value;
    const content = postContent.value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Title and content cannot be empty');
        return;
    }

    const post = { title, content };
    
    // Salva o post no LocalStorage
    savePost(post);
    
    // Renderiza o novo post na tela
    renderPost(post);

    // Limpa os campos de entrada
    postTitle.value = '';
    postContent.value = '';
}

// Função para salvar o post no LocalStorage
function savePost(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Função para carregar os posts do LocalStorage e renderizar na página
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => renderPost(post));
}

// Função para renderizar um post na página
function renderPost(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const postTitleElement = document.createElement('h3');
    postTitleElement.innerText = post.title;

    const postContentElement = document.createElement('p');
    postContentElement.innerText = post.content;

    // Botão de excluir post
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deletePost(post, postElement));

    postElement.appendChild(postTitleElement);
    postElement.appendChild(postContentElement);
    postElement.appendChild(deleteBtn);

    postsContainer.appendChild(postElement);
}

// Função para deletar um post
function deletePost(postToDelete, postElement) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Remove o post do LocalStorage
    posts = posts.filter(post => post.title !== postToDelete.title || post.content !== postToDelete.content);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Remove o post da tela
    postElement.remove();
}

// Adiciona um listener ao botão de criar post
createPostBtn.addEventListener('click', createPost);
// Função para para a tag marquee
function pauseMarquee() {
    const marquee = document.getElementById('marqueeText');
    marquee.stop(); // Para o marquee
  }
  document.getElementById('video').addEventListener('click', pauseMarquee);
