function setCurrentPage(pageNo) {
  if (pageNo !== undefined) {
    localStorage.setItem("page", pageNo);
  }

  const savedPage = localStorage.getItem("page");
  if (savedPage === null) {
    localStorage.setItem("page", "0");
  }

  goToCurrentPage();
}

function updatePage(type) {
  let currentPage = Number(localStorage.getItem("page")) || 0;
  if (type === "back") {
    currentPage = Math.max(0, currentPage - 1);
  } else if (type === "next") {
    currentPage = currentPage + 1;
  }
  localStorage.setItem("page", currentPage);
  goToCurrentPage();
}

function goToCurrentPage() {
  // localStorage.setItem('page', 0)
  const page = localStorage.getItem("page") || "0";
  const pageMap = {
    "0": "00_intro.html",
    "1": "01_jan.html",
    "2": "02_feb.html",
  };

  const targetFile = pageMap[page];
  const currentPath = window.location.pathname;

  if (currentPath.endsWith(targetFile)) return;

  const isInsidePages = currentPath.includes("/pages/");

  if (isInsidePages) {
    window.location.href = targetFile;
  } else {
    window.location.href = `pages/${targetFile}`;
  }
}
