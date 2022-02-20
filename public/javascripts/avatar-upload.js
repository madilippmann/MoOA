const uploadForm = document.getElementById('upload-form');
const imageInput = document.getElementById('file');

uploadForm.addEventListener("submit", async event => {
    event.preventDefault();
    

   
    const file = imageInput.files[0];

    const token = document.querySelector('#token').getAttribute('value') // grab token to pass back into fetch

    // get secure url from our server
    const { url } = await fetch("/s3Url").then(res => res.json())

    // post the image directly to the bucket
    // add const res = await fetch to check that res worked
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body: file
    })


    // Extract path from url to store in db
    const path = url.split('?')[0]
    let userNameUrl = window.location.href
    let userName = userNameUrl.split("/")[3]

    // Send db info back to server to store image url and title in db
    const addImageRes = await fetch(`\/${userName}/avatar/edit`, {
        method: "POST",
        body: JSON.stringify({
            path,
        }),
        headers: {
            'Accept': 'application/json',
            'CSRF-Token': token, // include csrfToken in req header
            "Content-type": 'application/json'
        }
    })
    
    
    // Redirect
    window.location.href = `\/${userName}/edit`;
    
})

