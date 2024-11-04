// Функция для открытия всплывающего окна с картинкой
function openPopup(imageSrc) {
    const overlay = document.getElementById('modal__window');
    const popupImg = document.getElementById('popup-img');
    
    popupImg.src = imageSrc; // Устанавливаем изображение большого размера
    overlay.style.display = 'flex'; // Показываем затемненный фон и окно
  }

  // Функция для закрытия всплывающего окна
  function closePopup() {
    const overlay = document.getElementById('modal__window');
    overlay.style.display = 'none'; // Скрываем окно
  }