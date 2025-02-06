let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: 1738146027613 // bisa menggunakan Date.now()
  }
]

const createNote = (heading, description, created_by) => {
  // kode kalian
  const id = notes.length + 1;
  const created_at = Date.now();
  notes.push({ id, heading, description, created_by, created_at });
}

const readNote = () => {
  // kode kalian
  // notes.forEach(note => {
  //   console.log(`ID: ${note.id}`);
  //   console.log(`Heading: ${note.heading}`);
  //   console.log(`Description: ${note.description}`);
  //   console.log(`Created By: ${note.created_by}`);
  //   console.log(`Created At: ${note.created_at}\n`);
  // });
  console.log(notes);
}

const updateNote = (id, heading, description) => {
  // kode kalian
  const index = notes.findIndex(note => note.id === id);

  notes[index].heading = heading;
  notes[index].description = description;
}

const deleteNote = (id) => {
  // kode kalian
  const index = notes.findIndex(note => note.id === id);

  notes.splice(index, 1);
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1)
readNote()
