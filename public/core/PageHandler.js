function setCurrentPage(pageNo = undefined) {
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
  currentPage = type === "back" ? currentPage - 1 : currentPage + 1;
  currentPage = Math.min(Math.max(0, currentPage), 7);
  localStorage.setItem("page", currentPage);
  goToCurrentPage();
}

function goToCurrentPage() {
  const page = localStorage.getItem("page") || "0";
  const pageMap = {
    0: "00_intro.html",
    1: "01_jan.html",
    2: "02_feb.html",
    3: "03_apr.html", // Skip March
    4: "04_may.html",
    5: "05_misc.html",
    6: "06_dec.html",
    7: "07_outro.html",
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
