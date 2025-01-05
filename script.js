// script.js

document.getElementById('check-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const itemCode = document.getElementById('item-code').value.trim();
    const resultDiv = document.getElementById('result');
  
    // ตัวอย่างการตรวจสอบสินค้า
    const items = {
      "12345": "สินค้า: โทรศัพท์มือถือ",
      "67890": "สินค้า: คอมพิวเตอร์",
      "11111": "สินค้า: หูฟัง",
    };
  
    if (items[itemCode]) {
      resultDiv.textContent = items[itemCode];
    } else {
      resultDiv.textContent = "ບໍ່ພົບສິນຄ້າ";
    }
  });