// Sample data: 2 Portfolios x 2 Items (fictional, no sensitive information).
// The same content is exported to sample-portfolio-1.json and sample-portfolio-2.json.
window.SAMPLE_PORTFOLIOS = [
  {
    id: "p-sample-1",
    name: "Nok (ตัวอย่าง)",
    enjoy: "ชอบออกแบบหน้าเว็บและจัดวางตัวอักษรให้อ่านง่าย",
    tried: "เคยทำเว็บส่วนตัว 1 หน้า และโปสเตอร์ชมรมด้วย Canva",
    curious: "อยากรู้ว่า JavaScript เก็บข้อมูลในเบราว์เซอร์ได้อย่างไร",
    items: [
      {
        id: "item001",
        title: "My First Website",
        type: "Course Assignment",
        date: "2026-10-18",
        role: "Developer",
        description: "Created a personal website with HTML and CSS",
        skills: ["HTML", "CSS"],
        reflection: {
          whatIDid: "Built the website",
          whatILearned: "Responsive design",
          challenge: "Mobile layout",
          nextStep: "Improve the design"
        },
        evidence: ["https://example.com/my-first-website"]
      },
      {
        id: "item002",
        title: "Club Poster",
        type: "Club Activity",
        date: "2026-09-12",
        role: "Designer",
        description: "Designed a poster for the photography club open house",
        skills: ["Canva", "Typography"],
        reflection: {
          whatIDid: "Drafted three layouts and picked one with the team",
          whatILearned: "Contrast and spacing make text easier to read",
          challenge: "Fitting all event details on one page",
          nextStep: "Try a grid layout next time"
        },
        evidence: ["https://example.com/club-poster", "https://example.com/club-poster-draft"]
      }
    ]
  },
  {
    id: "p-sample-2",
    name: "Beam (ตัวอย่าง)",
    enjoy: "ชอบแก้โจทย์ตรรกะและเขียนสคริปต์เล็กๆ ช่วยงานซ้ำๆ",
    tried: "เคยเขียนเกมทายตัวเลข และสคริปต์จัดชื่อไฟล์",
    curious: "สนใจการทดสอบโปรแกรมและการทำงานร่วมกันด้วย Git",
    items: [
      {
        id: "item001",
        title: "Number Guessing Game",
        type: "Personal Project",
        date: "2026-08-30",
        role: "Solo Developer",
        description: "A browser game where the player guesses a hidden number",
        skills: ["JavaScript", "DOM"],
        reflection: {
          whatIDid: "Wrote the game logic and a simple score display",
          whatILearned: "How to read input from a form and update the page",
          challenge: "Handling invalid input such as empty values",
          nextStep: "Add difficulty levels"
        },
        evidence: ["https://example.com/guessing-game"]
      },
      {
        id: "item002",
        title: "File Renamer Script",
        type: "Workshop",
        date: "2026-10-05",
        role: "Participant",
        description: "Workshop script that renames photos by date",
        skills: ["Python", "Automation"],
        reflection: {
          whatIDid: "Followed the workshop and changed the naming pattern",
          whatILearned: "Loops and string formatting save a lot of manual work",
          challenge: "Understanding file paths on different systems",
          nextStep: "Add a dry-run option before renaming"
        },
        evidence: ["https://example.com/file-renamer"]
      }
    ]
  }
];
