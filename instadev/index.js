// FAKE BD
var posts = [
    {
        id: 1,
         user: {
            nickname: 'anitaaaflores',
            local: 'tijucas - sc',
            profileImg:'https://i.pinimg.com/736x/19/ff/5a/19ff5a6943049355d6370faae73f4044.jpg'
         },
         Image:'https://i.pinimg.com/736x/b0/cb/24/b0cb244e23b882f11161d2737f7a654a.jpg',
         legend: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fuga amet unde non, alias dolore quis distinctio ex nostrum',
         likes: 1,
         isLike: true,
         data: "2026-09-28T19:24:00",
         Comments:[
            {
                id: 1,
                username: "pedrinhopedra",
                text: "pedrinhopedra",
                data:"2026-09-28T19:24:00",
            },
            {
                id: 1,
                username: "mariama",
                text: "uai",
                data:"2026-09-28T19:24:00",
            }
         ]
    },

    {
        id:2 ,
         user: {
            nickname: 'macacooooo',
            local: 'floresta- Cu do mundo',
            profileImg:'https://i.pinimg.com/736x/d7/9b/f6/d79bf693273560a683d6c406dd884bd9.jpg'
         },
         Image:'https://i.pinimg.com/736x/d5/ff/51/d5ff5130dc17efb4c008da1a73ad3f94.jpg',
         legend: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fuga amet unde non, alias dolore quis distinctio ex nostrum',
         likes: 0,
         isLike: false,
         data: "2026-09-28T19:24:00",
         Comments:[
            {
                id: 1,
                username: "pedrinhopedra",
                text: "feio",
                data:"2026-09-28T19:24:00",
            },
            {
                id: 1,
                username: "mariama",
                text: "mamaco",
                data:"2026-09-28T19:24:00",
            }
         ]
    }
]

//FUNCOES JS
const feed = document.getElementById("feed");
const botaoAbrir = document.getElementById ("botaoAbrirModal");
const botaoFechar = document.getElementById("botaoFecharModal");
const botaoPublicar = document.getElementById("botaoPublicar");
const botaoLike = document.getElementById("")

const modal = document.getElementById("modalPost");

botaoAbrir.addEventListener("click",() => {
    modal.classList.remove("hidden")
})

botaoFechar.addEventListener("click", () => {
    modal.classList.add("hidden");
})

botaoPublicar.addEventListener("click", () => {
    var urlImagem = document.getElementById("imgPost").value;
    var legenda = document.getElementById("legendPost").value;


    var novoPost = {
        id: posts[posts.length - 1].id + 1,
        user: {
            nickname: "anitaflores",
            local: "Tijucas - sc",
            profileImg: "https://i.pinimg.com/736x/22/e9/be/22e9be382cfc286392c51546c310ee63.jpg",
        },
        Image:urlImagem,
        legenda: legenda,
        likes: 0,
        isLike: false,
        data: new Date().toISOString(),
        Comments: []
    }

    posts.push(novoPost);
    renderPosts();
    modal.classList.add("hidden");

    Document.getElementById("imPost").value = "";
    document.getElementById("legendPost").value = "";
})

function curtirPost(idPost){
    for(var i = 0; i< posts.length; i++){
        if(idPost === posts[i].id){
            posts[i].isLike = !posts[i].isLike;
            posts[i].likes = posts[i].isLike === true ? posts[i].likes + 1 : posts[i].likes;
            renderPosts();
            return; 
        }
    }
    // IR NA LISTA DE POST E ENCONTRAR O POST COM O MESMO ID RECEBIDO
    // IR NO POST ENCONTRADO E ATUALIZAR O COMAPO islike(se true vira false, se false vira true)
    //incrementar valor do likes
    //renderizar novamente a tela
}

function renderPosts() {
    feed.innerHTML = "";

    for(var i = 0; i < posts.length; i++) {
        var article = document.createElement("article");

        var commentsHTML = "";
        for(var comment of posts[i].Comments) {
            commentsHTML +=`
             <p class="comment">
                        <strong>${comment.username}</strong>
                        ${comment.text}
                    </p>
                `;  
        }

    article.innerHTML = `
    <header class="post-header">
                    <div class="post-user">
                        <img src="${posts[i].user.profileImg}">

                        <div>
                            <strong><a href="">${posts[i].user.nickname}</a></strong>
                            <span>${posts[i].user.local}</span>
                        </div>
                    </div>

                    <button class="more">•••</button>
                </header>
                <img class="post-image" src="${posts[i].Image}" >
                <div class="post-actions">
                    <div>
                        <button clas="${posts[i].isLike ? 'liked' : ''}"onclick= "curtirPost(${posts[i].id})"r>♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>${posts[i].likes}</strong>

                    <p>
                        <strong>${posts[i].user.nickname}</strong>
                        ${posts[i].legend}
                    </p>

                    <a href="#">Ver todos os 7 comentários</a>

                   ${commentsHTML}

                    <span class="post-date">Há 2 horas</span>
                </div>

            </article>

                  <article class="post">
                <header class="post-header">
                    <div class="post-user">
                        <img src="https://github.com/gustavoroberto1.png">

                        <div>
                            <strong><a href="">gustavoroberto1</a></strong>
                            <span>Tijucas - SC</span>
                        </div>
                    </div>

                    <button class="more">•••</button>
                </header>
                <img class="post-image" src="https://picsum.photos/seed/programacao/600/600" >
                <div class="post-actions">
                    <div>
                        <button>♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>200 curtidas</strong>

                    <p>
                        <strong>gustavoroberto1</strong>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fuga amet unde non, alias dolore quis distinctio ex nostrum molestias animi in obcaecati dolores blanditiis odio dolorem quas porro aliquid!
                    </p>

                    <a href="#">Ver todos os 7 comentários</a>

                   ${commentsHTML}

                    <span class="post-date">Há 2 horas</span>
                </div>

            </article>

                  <article class="post">
                <header class="post-header">
                    <div class="post-user">
                        <img src="https://github.com/gustavoroberto1.png">

                        <div>
                            <strong><a href="">gustavoroberto1</a></strong>
                            <span>Tijucas - SC</span>
                        </div>
                    </div>

                    <button class="more">•••</button>
                </header>
                <img class="post-image" src="https://i.pinimg.com/736x/99/6f/f6/996ff644e1b5505f9832b780eeb9df1b.jpg" >
                <div class="post-actions">
                    <div>
                        <button>♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>200 curtidas</strong>

                    <p>
                        <strong>gustavoroberto1</strong>
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fuga amet unde non, alias dolore quis distinctio ex nostrum molestias animi in obcaecati dolores blanditiis odio dolorem quas porro aliquid!
                    </p>

                    <a href="#">Ver todos os 7 comentários</a>

                    ${commentsHTML}

                    <span class="post-date">Há 2 horas</span>
                </div>

            </article>
        </section>

    </main>

<aside class="suggestions">
    <div class="user">
            <img src="https://github.com/anitaflores-beep.png" alt="foto de perfil">

        <div>
            <strong>anitaflores</strong>
            <span>Anita Flores</span>
        </div>

        <a href="#">Sair</a>
    </div>

    <div class="suggestion-title">
        <strong>Sugestoes para voce</strong>
        <a href="">Ver todos</a>
    </div>

    <div class="suggestion">
        <img src="https://i.pinimg.com/1200x/f9/8b/8d/f98b8de6a2190d9964fcb838573fb2f0.jpg" >
        <div>
            <strong>pedrinhdasilva</strong>
            <span>Sugestao para voce</span>
        </div>
        <a href="#">Seguir</a>
    </div>

    <div class="suggestion">
        <img src="https://i.pinimg.com/1200x/1e/ad/18/1ead1844b21db36ec1a91a8d9b19e59e.jpg" >
        <div>
            <strong>luuuucaaaaaaaaaas</strong>
            <span>Sugestao para voce</span>
        </div>
        <a href="#">Seguir</a>
    </div>

    <div class="suggestion">
        <img src="https://i.pinimg.com/736x/1d/e8/9f/1de89f155d2b6ffc84db28be3cdc15c0.jpg" >
        <div>
            <strong>slslslslslsslslsl</strong>
            <span>Sugestao para voce</span>
        </div>
        <a href="#">Seguir</a>
    </div>
    `;

feed.appendChild(article);
    }
}

renderPosts();