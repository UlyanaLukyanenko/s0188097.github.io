document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pager = document.getElementById('pager');
  
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;
    let itemsPerPage = 3;
  
    const updateItemsPerPage = () => {
      itemsPerPage = window.innerWidth <= 600 ? 1 : 3;
    };
  
    const totalPages = () => Math.ceil(totalItems / itemsPerPage);
    let currentPage = 1;
  
    const updateGallery = () => {
      updateItemsPerPage();
      const itemWidth = items[0].offsetWidth;
      const offset = (currentPage - 1) * itemsPerPage * itemWidth * -1;
      gallery.style.transform = `translateX(${offset}px)`;
      updatePager();
    };
  
    const updatePager = () => {
      pager.textContent = `Страница ${currentPage} из ${totalPages()}`;
    };
  
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updateGallery();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages()) {
        currentPage++;
        updateGallery();
      }
    });
  
    window.addEventListener('resize', updateGallery);
    updateGallery();
  });
  
