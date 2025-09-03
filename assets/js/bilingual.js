document.addEventListener('DOMContentLoaded', function () {
  const postContent = document.querySelector('.post .post-content');
  if (!postContent) return;

  const bilingualBlocks = postContent.querySelectorAll('.bilingual-raw');

  bilingualBlocks.forEach(block => {
    // 按 <hr> 分隔，不管有没有属性
    const parts = block.innerHTML.split(/<hr[^>]*>/i);

    if (parts.length === 2) {
      const bilingualSection = document.createElement('div');
      bilingualSection.className = 'bilingual-section';

      const col1 = document.createElement('div');
      col1.className = 'bilingual-col';
      col1.innerHTML = parts[0].trim();

      const col2 = document.createElement('div');
      col2.className = 'bilingual-col';
      col2.innerHTML = parts[1].trim();

      bilingualSection.appendChild(col1);
      bilingualSection.appendChild(col2);

      block.replaceWith(bilingualSection);
    }
  });
});
