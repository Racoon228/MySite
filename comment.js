document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Валидация
    if (!email || !rating || !comment) {
        showMessage('Пожалуйста, заполните все поля.', 'error');
        return;
    }

    // Пример отправки данных на сервер (замените URL на ваш сервер)
    fetch('https://example.com/api/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, rating, comment })
    })
    .then(response => {
        if (response.ok) {
            showMessage('Спасибо за ваш отзыв!', 'success');
            document.getElementById('feedbackForm').reset(); // Сброс формы
        } else {
            showMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.', 'error');
        }
    })
    .catch(error => {
        showMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.', 'error');
        console.error('Ошибка:', error);
    });
});

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type === 'success' ? 'success' : 'error';
}
