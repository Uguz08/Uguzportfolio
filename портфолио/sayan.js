// ФУНКЦИЯ 1: Мобильное меню (бургер)
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ФУНКЦИЯ 2: Модальное окно с подробной информацией о проектах
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const openModalButtons = document.querySelectorAll('.open-modal');

openModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modalTitle.textContent = btn.getAttribute('data-title');
        modalDesc.textContent = btn.getAttribute('data-desc');
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ФУНКЦИЯ 3: Проверка (валидация) формы с сообщениями об ошибках
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const formError = document.getElementById('formError');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // отменяем стандартную отправку страницы
    
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        formError.textContent = 'Пожалуйста, заполните все обязательные поля!';
        return;
    }
    
    if (!emailInput.value.includes('@')) {
        formError.textContent = 'Введите корректный Email (должен содержать @)';
        return;
    }

    formError.style.color = '#38bdf8';
    formError.textContent = 'Спасибо! Сообщение успешно проверено и отправлено.';
    contactForm.reset();
});