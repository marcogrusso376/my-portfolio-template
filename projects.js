
const projectsGrid = document.getElementById("projects-grid");

projects.forEach((project) => {
    const card = document.createElement("a");

    card.className = "project-card";
    card.href = `project-detail.html?id=${project.id}`;

    const image = document.createElement("img");
    image.src = project.thumbnail;
    image.alt = project.title;
    image.loading = "lazy";

    const title = document.createElement("h2");
    title.textContent = project.title;

    const category = document.createElement("p");
    category.textContent = project.category;

    card.append(image, title, category);
    projectsGrid.appendChild(card);
});
