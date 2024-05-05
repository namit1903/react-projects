// import dotenv from 'dotenv';
// dotenv.config()
function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <h1>Chal rha hai project {import.meta.env.VITE_APPWRITE_URL}</h1>
    </>
  );
}

export default App;
