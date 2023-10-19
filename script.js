// Sample article data
const articles = [
    {
        title: "Article 1",
        date: "October 18, 2023",
        description: "This is the first article description.",
        imageSrc: "placeholderimage1",
    },
    {
        title: "Article 2",
        date: "October 19, 2023",
        description: "This is the second article description.",
        imageSrc: "placeholder2.jpg",
    },
    {
        title: "Article 3",
        date: "October 20, 2023",
        description: "This is the third article description.",
        imageSrc: "placeholder3.jpg",
    },
];

const articleList = document.getElementById("article-list");

// Loop through articles and create HTML elements
articles.forEach((article, index) => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    const title = document.createElement("h2");
    title.textContent = article.title;
    articleDiv.appendChild(title);

    const date = document.createElement("p");
    date.classList.add("date");
    date.textContent = article.date;
    articleDiv.appendChild(date);

    const description = document.createElement("p");
    description.textContent = article.description;
    articleDiv.appendChild(description);

    const image = document.createElement("img");
    image.src = article.imageSrc;
    image.alt = article.title + " Image";
    articleDiv.appendChild(image);

    articleList.appendChild(articleDiv);
});
