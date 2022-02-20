window.addEventListener("DOMContentLoaded", (event)=>{

    const isEmpty = obj => Object.keys(obj).length === 0;

    const followButton = document.querySelector(".follow-icon");

    followButton.addEventListener('click', async() => {

        const handleLink = document.getElementById('handle-username');
        const followsCount = document.querySelector('.follows-count')
        const url = handleLink.getAttribute('href');
        const username = url.split('/')[1];

        try {
            const res = await fetch('/follows', {
                method: "PUT",
                body: JSON.stringify({username}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!res.ok) {
                throw res;
            }

            const newFollow = await res.json();

            if (!isEmpty(newFollow)) {
                // incremenet
                // console.log('Entered conditional');
                followsCount.innerHTML = Number(followsCount.innerHTML) + 1
                // likeButton.setAttribute('data-liked', true);
                followButton.classList.add('followed')
            } else {
                // decrement
                followsCount.innerHTML = Number(followsCount.innerHTML) - 1
                // delete likeButton.dataset.liked;
                followButton.classList.remove('followed')
            }

        } catch (err){
            // TODO
        }

    })




    // likes
    const likeButton = document.getElementById('like-button');



    likeButton.addEventListener('click', async () => {

        const postUrl = window.location.href.split('/');
        const postId = postUrl[postUrl.length - 1];
        const likesCount = document.querySelector('.likes-num')

        try {
            const res = await fetch('/likes', {
                method: "PUT",
                body: JSON.stringify({postId}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })


            if (!res.ok) {
                throw res;
            }

            const newLike = await res.json();

            console.log(newLike);


            if (!isEmpty(newLike)) {
                // incremenet
                console.log('Entered conditional');
                likesCount.innerHTML = Number(likesCount.innerHTML) + 1
                // likeButton.setAttribute('data-liked', true);
                likeButton.classList.add('liked')
            } else {
                // decrement
                likesCount.innerHTML = Number(likesCount.innerHTML) - 1
                // delete likeButton.dataset.liked;
                likeButton.classList.remove('liked')
            }
        } catch (err) {
            console.log(err);
        }


        // if (!likeButton.dataset.liked) {


        //     try {
        //         const res = await fetch('/likes', {
        //             method: "POST",
        //             body: JSON.stringify({postId}),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }

        //         })

        //         if (!res.ok) {
        //             throw res;
        //         }

        //         const newLike = await res.json()
        //         console.log("NEW LIKE: ", newLike);
        //         if (newLike && newLike.id) {
        //             likesCount.innerHTML = Number(likesCount.innerHTML) + 1
        //             likeButton.setAttribute('data-liked', true);
        //             likeButton.classList.add('liked')
        //         }

        //     } catch (err) {
        //         // TODO
        //     }

        // } else {

        //     try {
        //         const res = await fetch('/likes', {
        //             method: "DELETE",
        //             body: JSON.stringify({postId}),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         })

        //         if (!res.ok) {
        //             throw res;
        //         }
        //         likesCount.innerHTML = Number(likesCount.innerHTML) - 1
        //         delete likeButton.dataset.liked;
        //         likeButton.classList.remove('liked')

        //     } catch (err) {
        //         // TODO
        //     }

        // }

//         if (!likeButton.dataset.liked) {


//             try {
//                 const res = await fetch('/likes', {
//                     method: "POST",
//                     body: JSON.stringify({postId}),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }

//                 })
//                 likesCount.innerHTML = Number(likesCount.innerHTML) + 1
//                 likeButton.setAttribute('data-liked', true);
//                 likeButton.classList.add('liked')
//                 if (!res.ok) {
//                     throw res;
//                 }

//             } catch (err) {
//                 // TODO
//             }

//         } else {

//             try {
//                 const res = await fetch('/likes', {
//                     method: "DELETE",
//                     body: JSON.stringify({postId}),
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 })

//                 if (!res.ok) {
//                     throw res;
//                 }
//                 likesCount.innerHTML = Number(likesCount.innerHTML) - 1
//                 delete likeButton.dataset.liked;
//                 likeButton.classList.remove('liked')

//             } catch (err) {
//                 // TODO
//             }

//         }


    })



})
