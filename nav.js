// Is this good practice? I can't find answers
// Otherwise navbar isn't found because it hasn't loaded yet
window.addEventListener("load", init);

function init(params) {
  const pageLink = {
    hyperlink: "index.html",
    text: "Home",
  };
  const pageSimpleGrid = {
    hyperlink: "simple_grid.html",
    text: "Simple Grid",
  };

  const links = [pageLink, pageSimpleGrid];

  const navBar = document.getElementById("nav");
  console.log({ navBar });

  links.forEach((element) => {
    const tagDiv = document.createElement("div");
    const tagA = document.createElement("a");

    tagDiv.classList.add("nav__button");
    tagA.href = element.hyperlink;
    tagA.target = "_self";
    tagA.innerHTML = element.text;

    tagDiv.appendChild(tagA);
    navBar.appendChild(tagDiv);
  });
}
