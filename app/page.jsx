// Homepage

export default function Homepage() {
  console.log("Main page running...");

  return (
    <div>
      <div class="flex min-h-screen flex-col">
        <header class="p-4">Header</header>
        <div class="flex flex-1 flex-row">
          <main class="flex-1 p-4">Content</main>
        </div>
        <footer class="p-4">Footer</footer>
      </div>
    </div>
  );
}
