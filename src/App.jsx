

function HomePage() {
  return (
    <div>
      <h1>home page</h1>
    </div>
  )
}

function SecondPage() {
  return (
    <div>
      <h1>second page</h1>
    </div>
  )
}

Route({path, element}) {

}

export default function App() {
  return (
    <div>
      <Route path="" element={<HomePage />} />
      <Route path="" element={<SecondPage />} />
    </div>
  );
}
