const btns = document.querySelectorAll("section button");

btns.forEach((btn) => {
  btn.classList.add("click");
});

const devide = document.querySelectorAll("section > div");
devide.forEach((d) => {
  d.appendChild(document.createElement("hr"));
});

// ============= THEME MANAGEMENT ================
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  const modeBtn = document.querySelector(".mode-change");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (modeBtn) {
      modeBtn.innerHTML = `<svg viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2V4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`;
    }
  } else {
    document.body.classList.remove("dark");
  }
}

// Load theme on page load
loadTheme();

const dropdownTitles = document.querySelectorAll(".sidebar h3");

dropdownTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    const drop = title.querySelector(".dropdown");

    content.classList.toggle("show");
    drop.classList.toggle("active");
  });

  title.classList.add("align-center");
});

// button active mode changing

const buttons = document.querySelectorAll(".sidebar a");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

// copying arabic dua
const copyBtns = document.querySelectorAll("button.copy");

copyBtns.forEach((copyBtn) => {
  copyBtn.addEventListener("click", () => {
    // btn chamging
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>';
    }, 2000);
  });
});

// ===================  SIDEBAR HIDE AND SEEK =============

const menu = document.querySelector("#menu");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  sidebar.classList.toggle("hide");
});

const modeBtn = document.querySelector(".mode-change");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save theme to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    modeBtn.innerHTML = `<svg viewBox="-3.6 -3.6 31.20 31.20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 2V4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>`;
  } else {
    localStorage.setItem("theme", "light");
    modeBtn.innerHTML = `<svg
            viewBox="-3.6 -3.6 31.20 31.20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z"
                fill="#14004d"
              ></path>
            </g>
          </svg>`;
  }
});

// reveal

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

const resultsBox = document.getElementById("search-results");
const sidebarLinks = document.querySelectorAll(".sidebar a");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

// Toggle search input on mobile devices
searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("expanded");

  searchInput.addEventListener("focus", () => {
    document.querySelector(".logo").classList.add("hide");
    document.querySelector(".contact").classList.add("disp");
  });

  // When the user clicks away from the search bar
  searchInput.addEventListener("blur", () => {
    document.querySelector(".logo").classList.remove("hide");
    document.querySelector(".contact").classList.remove("disp");
  });

  // Focus input when expanded on mobile
  if (searchInput.classList.contains("expanded")) {
    searchInput.focus();
  } else {
    searchInput.value = "";
    resultsBox.innerHTML = "";
    resultsBox.style.display = "none";
  }
});

// Hide results and collapse input when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".search-container") &&
    !e.target.closest(".search-btn")
  ) {
    if (window.innerWidth < 750) {
      searchInput.classList.remove("expanded");
      resultsBox.style.display = "none";
    }
  }
});

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();
  resultsBox.innerHTML = "";

  if (value === "") {
    resultsBox.style.display = "none";
    return;
  }

  sidebarLinks.forEach((link) => {
    const text = link.textContent.toLowerCase();

    if (text.includes(value)) {
      const resultLink = document.createElement("a");

      // Set the result as a proper link
      resultLink.href = link.getAttribute("href");
      resultLink.textContent = link.textContent;
      resultLink.className = "search-result-link";
      
      // Handle click - clear search and show logo/contact on mobile
      resultLink.addEventListener("click", (e) => {
        // Don't prevent default - let the link navigate
        resultsBox.style.display = "none";
        searchInput.value = "";

        // Collapse input on mobile
        if (window.innerWidth < 750) {
          searchInput.classList.remove("expanded");
          document.querySelector(".logo").classList.remove("hide");
          document.querySelector(".contact").classList.remove("disp");
        }
      });

      resultsBox.appendChild(resultLink);
    }
  });

  resultsBox.style.display = resultsBox.children.length > 0 ? "block" : "none";
});
