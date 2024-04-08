// เพิ่ม event listener สำหรับ input
var input = document.getElementById('search-input');
input.addEventListener('keyup', function(event) {
    // ตรวจสอบว่าปุ่ม Enter ถูกกดหรือไม่
    if (event.key === 'Search') {
        // ดึงค่าที่ผู้ใช้ค้นหา
        var query = input.value.trim().toLowerCase();
        
        // เชื่อมโยงไปยังส่วนที่เกี่ยวข้องโดยตรวจสอบคำค้นหา
        switch(query) {
            case 'butterfly set 001 (halter+skirt+headband)':
                window.location.href = '#all2';
                break;
            case 'butterfly top 002':
                window.location.href = '#all2';
                break;
            case 'flower dress 003':
                window.location.href = '#all2';
                break;
            case 'chic skirt 004':
                window.location.href = '#all2';
                break;
            case 'long chic skirt 005':
                window.location.href = '#all2';
                break;
            case 'dress beep 006':
                window.location.href = '#all2';
                break;
            case 'dream jeans set 007 (vest+skirt)':
                window.location.href = '#all2';
                break;
            default:
                // ไม่มีการจัดการสำหรับคำค้นหาอื่น ๆ
                break;
        }
    }
});
