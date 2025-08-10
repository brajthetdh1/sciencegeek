document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.add('hidden');
    });

    // Remove active styles from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('text-blue-600', 'font-semibold', 'border-b-2', 'border-blue-600');
    });

    // Show selected tab content
    document.getElementById(tab).classList.remove('hidden');

    // Style active tab
    button.classList.add('text-blue-600', 'font-semibold', 'border-b-2', 'border-blue-600');
  });
});



// Hot questions data
const hotQuestions = [
  "What is the value of π to 50 decimal places?",
  "How to solve quadratic equations?",
  "Difference between permutations and combinations",
  "What is Euler's formula?",
  "Applications of derivatives in real life"
];

// Math equations data
const mathEquations = [
  "E = mc^2",
  "\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
  "\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}",
  "a^2 + b^2 = c^2",
  "\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}"
];

// Render hot questions
const hotQuestionsList = document.getElementById("hot-questions");
hotQuestions.forEach(q => {
  const li = document.createElement("li");
  li.textContent = q;
  li.classList.add("cursor-pointer", "hover:underline");
  hotQuestionsList.appendChild(li);
});

// Render equations
const equationsDiv = document.getElementById("equations");
mathEquations.forEach(eq => {
  const p = document.createElement("p");
  p.innerHTML = `\\(${eq}\\)`; // Inline MathJax format
  equationsDiv.appendChild(p);
});

// Re-render MathJax after DOM update
if (window.MathJax) {
  MathJax.typesetPromise();
}

