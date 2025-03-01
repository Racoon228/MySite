function createScrollToTopButton() {
    // Создаем кнопку
    const button = document.createElement("button");
    button.id = "scrollToTopBtn";
    button.title = "Go to top";
    button.innerHTML = "↑"; // Текст кнопки

    // Стили для кнопки
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "10px";
    button.style.width = "50px";
    button.style.height = "50px";
    button.style.display = "none";
    button.style.backgroundColor = "#45a049";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.padding = "10px";
    button.style.cursor = "pointer";
    button.style.zIndex = "1000";

    // Добавляем кнопку в тело документа
    document.body.appendChild(button);

    // Показать или скрыть кнопку в зависимости от положения прокрутки
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block"; // Показать кнопку
        } else {
            button.style.display = "none"; // Скрыть кнопку
        }
    };

    // Прокрутка к началу страницы при нажатии на кнопку
    button.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };
}