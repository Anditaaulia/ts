const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar')

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
}) 

//jam
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour12: false});
    document.getElementById('clock').textContent = time;
}
setInterval(updateClock,1000);
updateClock();

let visitCount=localStorage.getItem('visitCount');
if (!visitCount) {
    visitCount = 1;
} else {
    visitCount = parseInt(visitCount) + 1;
}
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCount').textContent = visitCount;