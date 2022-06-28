 const openButton = document.getElementById('open');
 const closeButton = document.getElementById('close');
 const  modalWindows = document.getElementById('modal_windows');

openButton.addEventListener('click', function handleClick() {
    modalWindows.style.display = 'block';
});

closeButton.addEventListener('click', function handleClick() {
    modalWindows.style.display = 'none';
});
