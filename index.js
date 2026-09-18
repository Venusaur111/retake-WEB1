// Course data structure containing the list of courses
const courses = [
    {
        id: 1,
        title: "Javascript for beginners",
        category: "javascript",
        level: "beginner",
        price: 120000,
        language: "en",
        description: "A solid core for all your language. The video walks you through the basic mechanism of algorithms, loops, conditional functions, etc."
    },
    {
        id: 2,
        title: "Java for beginners",
        category: "java",
        level: "beginner",
        price: 220000,
        language: "en",
        description: "A simple course for the beginners to learn latest OOP fundamental classes objects, encapsulation, abstraction, polymorphism, inheritance."
    },
    {
        id: 3,
        title: "Relational Databases for...",
        category: "database",
        level: "intermediate",
        price: 80000,
        language: "en",
        description: "Understand how relational databases really work. This course introduces tables, primary keys, foreign keys, constraints, normalization..."
    },
    {
        id: 4,
        title: "Git & Version Control...",
        category: "git",
        level: "beginner",
        price: 95000,
        language: "fr",
        description: "Master Git from scratch: version tracking, commits, branches, merging, resolving conflicts, and collaborating with remote..."
    }
];

//functions

//card creator

// Generate HTML markup for a single course card with dynamic tags
function createCourseCard(course) {
    return `
    <div class="bg-white rounded-lg shadow overflow-hidden flex flex-col">
      <div class="h-32 bg-gray-300 relative bg-cover bg-center">
        <div class="absolute top-2 right-2 flex gap-1">
          <span class="bg-black text-white text-xs px-2 py-0.5 rounded">${course.category}</span>
          <span class="bg-gray-800 text-white text-xs px-2 py-0.5 rounded">${course.level}</span>
        </div>
      </div>
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="font-bold text-sm mb-1">${course.title}</h3>
        <p class="text-red-600 font-bold text-xs mb-2">MGA ${course.price.toLocaleString()}</p>
        <p class="text-gray-600 text-xs flex-grow mb-4">${course.description}</p>
        <div class="flex gap-2">
          <button class="flex-1 border border-gray-300 text-xs py-1.5 rounded hover:bg-gray-50">Learn more</button>
          <button class="flex-1 bg-red-600 text-white text-xs py-1.5 rounded hover:bg-red-700">Add to cart</button>
        </div>
      </div>
    </div>
  `;
}

// Function to render courses using the createCourseCard helper and forEach loop
function renderCourses(coursesData) {
    const container = document.getElementById("course-cards");
    container.innerHTML = "";

    coursesData.forEach(course => {
        container.innerHTML += createCourseCard(course);
    });
}

// Initial render when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    renderCourses(courses);
});

// Function to clear all filters and reset the form
function clearAllFilters() {
    document.getElementById("filter-tech").value = "";
    document.getElementById("filter-level").value = "";
    document.getElementById("filter-price-min").value = 0;
    document.getElementById("filter-price-max").value = 300000;
    document.getElementById("search-keyword").value = "";

    // Remove active state from language buttons if any
    document.querySelectorAll("#filter-languages button").forEach(btn => {
        btn.classList.remove("bg-red-600", "text-white");
        btn.classList.add("bg-white");
    });

    renderCourses(courses);
}

// Attach event listener to the clear button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clear-filters").addEventListener("click", clearAllFilters);
});