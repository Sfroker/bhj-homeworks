document.addEventListener('DOMContentLoaded', () => {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const book = document.getElementById('book');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();

            // Удаляем активный класс у всех кнопок
            fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));

            // Добавляем активный класс текущей кнопке
            control.classList.add('font-size_active');

            // Удаляем классы размера шрифта у книги
            book.classList.remove('book_fs-small', 'book_fs-big');

            // Добавляем соответствующий класс в зависимости от data-size
            const size = control.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
            // если обычный — не добавляем ничего
        });
    });
});