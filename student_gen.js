const f = require('fs'),
      d = ['Computer Science', 'Cybersecurity', 'Information Technology', 'Software Engineering'],
      l = [100, 200, 300, 400],
      m = {100: '26', 200: '25', 300: '24', 400: '23'};

let c = "Student ID,Department,Level,Attendance Percentage,Average Examination Score\n";

for (let i = 0; i < 100; i++) {
    let v = l[Math.random() * l.length | 0];
    c += `COCIMS/${m[v]}/${10000 + Math.random() * 90000 | 0},"${d[Math.random() * d.length | 0]}",${v},${(Math.random() * 50 + 50).toFixed(2)},${(Math.random() * 58 + 40).toFixed(2)}\n`;
}

f.writeFileSync('student_dataset.csv', c);