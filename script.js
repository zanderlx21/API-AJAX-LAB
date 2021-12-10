const body = document.querySelector("body");

const awwPromise = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json())

awwPromise.then(data => {
    for (let i = 0; i < data.data.children.length; i++){
        const newDiv = document.createElement("div")
        const newTitle = document.createElement("h3")
        const newImage = document.createElement("img")
        const newLink = document.createElement("a")

        let title = data.data.children[i].data.title
        let image = data.data.children[i].data.thumbnail
        let link = data.data.children[i].data.permalink

        console.log(link);

       newTitle.innerHTML = title;
       newImage.src = image;
       newLink.href = "https://reddit.com" + link;
       newLink.innerText = "Click here to visit the post!";
       newLink.target = "_blank"

       body.append(newDiv); 
       newDiv.appendChild(newTitle);
       newDiv.appendChild(newImage);
       newDiv.appendChild(newLink);
    }
})
.catch (e => {
    console.log(e);
});   

