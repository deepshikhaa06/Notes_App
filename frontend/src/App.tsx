import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
};

const App=() => {
  const [notes,setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Note 1",
      content: "This is the content of note 1"
    },
    {
      id: 2,
      title: "Note 2",
      content: "This is the content of note 2"
    },
    {
      id: 3,
      title: "Note 3",
      content: "This is the content of note 3"
    },
    {
      id: 4,
      title: "Note 4",
      content: "This is the content of note 4"
    }
  ]);

  const [title,setTitle] = useState("");
  const [content,setContent] = useState("")
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const handleAddNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote:Note = {
      id: notes.length + 1,
      title,
      content
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  }
  const handleNoteClick = (note: Note) => {
   setSelectedNote(note);
   setTitle(note.title);
   setContent(note.content); 
  }
  const handleUpdateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!selectedNote) return;
    const updatedNote: Note = {
      ...selectedNote,
      title,
      content
    };
    const updatedNotes = notes.map(note => note.id === updatedNote.id ? updatedNote : note);
    setNotes(updatedNotes);
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }  
  const handleCancel = () => {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }
  const deleteNote = (e: React.MouseEvent<HTMLButtonElement>, noteId: number)=>{
    e.stopPropagation();
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-700 flex flex-col items-center p-3">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">Notes</h1>
  {/* Form Section */}
  <form className="w-full max-w-lg bg-grey shadow-lg rounded-xl p-4 mb-5 border border-gray-100" 
  onSubmit={(e)=>selectedNote ? handleUpdateNote(e) : handleAddNote(e)}>
    <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
      required
      className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <textarea
    value={content}
    onChange={(e) => setContent(e.target.value)}
      placeholder="Content"
      required
      rows={8}
      className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    ></textarea>
    {selectedNote ? (
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-200 mr-2">
          Update
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200">
          Cancel
        </button>
      </div>
    ):(<button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-lg font-medium transition duration-200" >
      Add Note
    </button>)}
  </form>

  {/* Notes Section */}
  <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {notes.map((note) => (
      <div className="bg-white shadow-md rounded-lg p-5 border border-gray-100 hover:shadow-lg transition duration-200 flex flex-col"
      onClick={() => handleNoteClick(note)}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-800 ">{note.title}</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200" onClick={(e) => deleteNote(e, note.id)}>Delete</button>
      </div>
     <p className="text-gray-600">{note.content}</p>
    </div>
    ))}
    
  </div>
</div>

  );
}

export default App;
