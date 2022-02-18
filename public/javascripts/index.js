window.addEventListener("DOMContentLoaded", (event)=>{
    console.log("hello from javascript!")

    // const demoButton = document.querySelector('.demo');

    // demoButton.addEventListener("click", (event) => {
    //     const res = await fetch('/demo-user')

    //     const login = await res.json()

    //     window.location.href = '/';
    // })

    const likeButton = document.getElementById('like-button');

    likeButton.addEventListener('click', async () => {
        const postUrl = window.location.href.split('/');
        const postId = postUrl[postUrl.length - 1];
        const likesCount = document.querySelector('.likes-num')
        
        if (!likeButton.dataset.liked) {

            
            try {
                const res = await fetch('/likes', {
                    method: "POST",
                    body: JSON.stringify({postId}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    
                })
                likesCount.innerHTML = Number(likesCount.innerHTML) + 1
                likeButton.setAttribute('data-liked', true);
                likeButton.classList.add('liked')
                if (!res.ok) {
                    throw res;
                }
                
            } catch (err) {
                // TODO
            }

        } else {

            try {
                const res = await fetch('/likes', {
                    method: "DELETE",
                    body: JSON.stringify({postId}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!res.ok) {
                    throw res;
                }
                likesCount.innerHTML = Number(likesCount.innerHTML) - 1
                delete likeButton.dataset.liked;
                likeButton.classList.remove('liked')

            } catch (err) {
                // TODO
            }

        }


    })



})
