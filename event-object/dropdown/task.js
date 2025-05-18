document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const value = dropdown.querySelector('.dropdown__value');
      const list = dropdown.querySelector('.dropdown__list');
      const items = dropdown.querySelectorAll('.dropdown__link');

      // Переключение выпадающего списка
      value.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
      });

      // Обработка выбора элемента
      items.forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault(); // запрещаем переход по ссылке
          value.textContent = link.textContent; // устанавливаем новое значение
          list.classList.remove('dropdown__list_active'); // закрываем список
        });
      });
    });

    // Закрытие всех списков при клике вне dropdown
    document.addEventListener('click', event => {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
          dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        }
      });
    });
  });