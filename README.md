# Power Up! Learning Portfolio (CS100 Checkpoint 1)

Web App สำหรับสร้าง Personal Learning Portfolio และเพิ่ม Portfolio Items ได้หลายรายการ
เก็บข้อมูลใน `localStorage` ของ Browser (ยังไม่มี Server/Database ใน Checkpoint นี้)

## วิธีเปิดและทดลอง

1. เปิดไฟล์ `index.html` ใน Browser (ดับเบิลคลิก หรือใช้ Live Server) ต้องต่ออินเทอร์เน็ตเพื่อโหลด Bootstrap จาก CDN
2. เปิดเว็บแล้วจะเห็นข้อมูลตัวอย่าง 2 Portfolios × 2 Items ทันที
3. ทดลองสร้างเอง: กรอกฟอร์ม **สร้าง Portfolio ใหม่** แล้วเพิ่ม Item ด้วยฟอร์ม **เพิ่ม Portfolio Item**
4. ทดลอง Validation: เว้นช่องว่าง ใส่วันที่ผิด หรือใส่ลิงก์ที่ไม่ขึ้นต้นด้วย `http://` / `https://` ระบบจะแจ้งเตือนและไม่บันทึก
5. Refresh หน้าเว็บ ข้อมูลต้องกลับมาครบ (Save → Refresh → Load)

## โครงสร้างไฟล์

```
index.html
css/style.css
js/samples.js        ข้อมูลตัวอย่าง 2 Portfolios x 2 Items
js/app.js            Form, Validation, JSON, localStorage
sample-portfolio-1.json
sample-portfolio-2.json
```

## โครงสร้างข้อมูล

ค่าใน `localStorage` key `powerup.portfolios` เป็น array ของ Portfolio:

```json
{
  "id": "p-sample-1",
  "name": "...", "enjoy": "...", "tried": "...", "curious": "...",
  "items": [ { "id": "item001", "title": "...", "type": "...", "date": "2026-10-18",
               "role": "...", "description": "...", "skills": ["HTML"],
               "reflection": { "whatIDid": "...", "whatILearned": "...", "challenge": "...", "nextStep": "..." },
               "evidence": ["https://example.com"] } ]
}
```

ชื่อ Field ของแต่ละ Item ต้องเทียบกับ `portfolio-example.json` ของรายวิชาอีกครั้งก่อนส่ง

## หมายเหตุ

- ข้อมูลอยู่ใน Browser เดิมเท่านั้น เปิดอีก Browser/เครื่องจะไม่เห็นข้อมูลเดียวกัน (ข้อจำกัดของ localStorage)
- ข้อมูลตัวอย่างเป็นข้อมูลสมมติ ไม่มีข้อมูลส่วนตัว
