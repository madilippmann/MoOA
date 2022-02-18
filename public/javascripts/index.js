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

        if (!likeButton.dataset.liked) {

            likeButton.setAttribute('data-liked', true);
            likeButton.classList.add('liked')

            try {
                const res = await fetch('/', {
                    method: "POST",
                    body: JSON.stringify(postId),
                    headers: {
                        'Content-Type': 'application/json'
                        }
                })

                if (!res.ok) {
                    throw res;
                }

            } catch (err) {
                // TODO
            }

        } else {

            try {
                const res = await fetch('/', {
                    method: "DELETE",
                    body: JSON.stringify(postId),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!res.ok) {
                    throw res;
                }

                delete likeButton.dataset.id;
                likeButton.classList.remove('liked')

            } catch (err) {
                // TODO
            }

        }


    })



})
