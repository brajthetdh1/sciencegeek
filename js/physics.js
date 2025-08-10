document.addEventListener('DOMContentLoaded', () => {
      // Tab switching logic
      const tabs = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');

      tabs.forEach(button => {
        button.addEventListener('click', () => {
          const tab = button.getAttribute('data-tab');

          // Hide all tab content
          tabContents.forEach(content => content.classList.add('hidden'));

          // Remove active styles from all buttons
          tabs.forEach(btn => btn.classList.remove('text-blue-600', 'font-semibold', 'border-b-2', 'border-blue-600'));

          // Show selected tab content
          document.getElementById(tab).classList.remove('hidden');

          // Style active tab
          button.classList.add('text-blue-600', 'font-semibold', 'border-b-2', 'border-blue-600');
        });
      });

      // Activate first tab by default
      tabs[0].click();

     
    });

    
const solutions = {
  1: `Newton's second law states that <span class="math">\\(F = ma\\)</span>, where <em>F</em> is force, <em>m</em> is mass, and <em>a</em> is acceleration.`,
  2: `Conservation of energy states that the total energy in an isolated system remains constant over time.`,
  3: `Kinetic energy formula is <span class="math">\\(KE = \\frac{1}{2}mv^2\\)</span> where <em>m</em> is mass and <em>v</em> is velocity.`,
  4: `The photoelectric effect is the emission of electrons from a material when light shines on it, explained by the particle nature of light.`,
  5: `Snell's law describes refraction of light: <span class="math">\\(n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2\\)</span>.`
};

function showSolution(id) {
  // Switch to Hot Questions tab programmatically
  const hotQuestionsTabBtn = document.querySelector('.tab-button[data-tab="hot-questions"]');
  if (hotQuestionsTabBtn) hotQuestionsTabBtn.click();

  // Update solution content
  const solDiv = document.getElementById('solution-content');
  solDiv.innerHTML = solutions[id] || 'Solution not available.';

  // Trigger MathJax to render math if loaded
  if(window.MathJax) {
    MathJax.typesetPromise();
  }
}