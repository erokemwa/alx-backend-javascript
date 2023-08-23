const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(Error(error));
        return;
      }
      const fileData = data.toString().split('\n');
      let student = fileData.filter((item) => item);
      student = student.map((item) => item.split(','));
      const fields = {};

      for (const i in student) {
        if (i !== 0) {
          if (!fields[student[i][3]]) fields[student[i][3]] = [];
          fields[student[i][3]].push(student[i][0]);
        }
      }
      delete fields.field;
      resolve(fields);
    });
  });
}

export default readDatabase;
