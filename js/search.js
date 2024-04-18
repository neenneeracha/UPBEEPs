        // รายการสินค้า
        const products = [
            { name: "Butterfly Set 001 (Halter+Skirt+Headband)", link: "https://shope.ee/8pOtw4zkA9" },
            { name: "Butterfly Top 002", link: "https://shope.ee/4KwUZmdooz" },
            { name: "Flower Dress 003", link: "https://shope.ee/1VcJCcIaxM" },
            { name: "Chic Skirt 004", link: "https://shope.ee/4KwUZqKKSi" },
            { name: "Long Chic Skirt 005", link: "https://shope.ee/6AO8m8q3fg" },
            { name: "Dress Beep 006", link: "https://shope.ee/5plINwTcpt" },
            { name: "Dream Jeans Set 007 (Vest+Skirt)", link: "https://shope.ee/8pOty4gS5l" },
            { name: "Butterfly Set 001 (Top+Skirt)", link: "https://shope.ee/8pOtw4zkA9" },
            { name: "Dream Jeans Set 007 (Vest+Skirt)", link: "https://shope.ee/8pOty4gS5l" },
            { name: "Butterfly Set 001 (halter)", link: "https://shope.ee/7UtWLvSPnx" },
            { name: "Dream Jeans Set 007 (Vest)", link: "https://shope.ee/Vjm3DECcl" },
            { name: "Butterfly Set 001 (Skirt)", link: "https://shope.ee/1AzSo3eNMd" },
            { name: "Long Chic Skirt 005", link: "https://shope.ee/6AO8m8q3fg" },
            { name: "Dream Jeans Set 007 (Skirt)", link: "https://shope.ee/30R71mwI1h" },
            { name: "Flower Dress 003", link: "https://shope.ee/1VcJCcIaxM" },
            { name: "Dress Beep 006", link: "https://shope.ee/5plINwTcpt" },
            { name: "Butterfly Set 001 (Headband)", link: "https://shope.ee/9pHR87v9ay" },
            { name: "Bowbeep", link: "https://shope.ee/2VUqOdWLLc" },
            { name: "DreamJeans Set 007 (Scrunchies)", link: "https://shope.ee/9pHR87v9ay" },
            { name: "necklace (UPBEEP's x nibnubnib)", link: "https://shope.ee/1VcJEJXEuP" }
          ];

// ฟังก์ชันค้นหาสินค้า
function searchProducts(query) {
    const results = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    return results;
  }
  
  // ฟังก์ชันสร้าง HTML สำหรับผลลัพธ์การค้นหา
  function renderResults(results) {
    const container = document.getElementById('searchResults');
    container.innerHTML = '';
  
    if (results.length === 0) {
      container.innerHTML = '<p>No matching products found.</p>';
      return;
    }
  
    const ul = document.createElement('ul');
    results.forEach(product => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = product.name;
      a.href = product.link;
      a.target = '_blank'; // เปิดลิงก์ในหน้าต่างใหม่
      li.appendChild(a);
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
  
  // อัพเดตผลลัพธ์เมื่อมีการพิมพ์ใน input field
  document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    const results = searchProducts(query);
    renderResults(results);
  });

  // ให้แสดงช่องเมื่อมีการพิมพ์ข้อความเข้ามาใน input field
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value;
    const results = searchProducts(query);
    renderResults(results);

    // ถ้ามีผลลัพธ์จากการค้นหา ให้แสดงช่อง
    if (results.length > 0) {
        document.getElementById('searchResults').style.display = 'block';
    } else {
        document.getElementById('searchResults').style.display = 'none';
    }
});

  
