window.addEventListener("DOMContentLoaded", (event) => {
    const isEmpty = obj => Object.keys(obj).length === 0;

    const likeButton = document.getElementById('like-button');
    likeButton.addEventListener('click', async () => {

        const postUrl = window.location.href.split('/');
        const postId = postUrl[postUrl.length - 1];
        const likesCount = document.querySelector('.likes-num')
        try {
            const res = await fetch('/likes', {
                method: "PUT",
                body: JSON.stringify({ postId }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                throw res;
            }

            const newLike = await res.json();

            if (!isEmpty(newLike)) {
                likesCount.innerHTML = Number(likesCount.innerHTML) + 1
                likeButton.classList.add('liked')
            } else {
                likesCount.innerHTML = Number(likesCount.innerHTML) - 1
                likeButton.classList.remove('liked')
            }
        } catch (err) { }
    })


    const followButton = document.querySelector(".follow-icon");
    if (followButton) {
        followButton.addEventListener('click', async () => {

            const handleLink = document.getElementById('handle-username');
            const followsCount = document.querySelector('.follows-count')
            const url = handleLink.getAttribute('href');
            const username = url.split('/')[1];

            try {
                const res = await fetch('/follows', {
                    method: "PUT",
                    body: JSON.stringify({ username }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!res.ok) {
                    throw res;
                }

                const newFollow = await res.json();

                if (!isEmpty(newFollow)) {
                    followsCount.innerHTML = Number(followsCount.innerHTML) + 1
                    followButton.classList.add('followed')
                } else {
                    followsCount.innerHTML = Number(followsCount.innerHTML) - 1
                    followButton.classList.remove('followed')
                }

            } catch (err) { }

        })

    }


})
