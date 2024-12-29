// Cursor ring effect
const cursorRing = document.createElement('div');
cursorRing.classList.add('cursor-ring');
document.body.appendChild(cursorRing);

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  cursorRing.style.left = `${clientX}px`;
  cursorRing.style.top = `${clientY}px`;
  cursorRing.style.width = '30px';
  cursorRing.style.height = '30px';
});

document.addEventListener('mouseleave', () => {
  cursorRing.style.width = '0';
  cursorRing.style.height = '0';
});
// Custom Mouse Cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
