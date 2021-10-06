<script>
import '../tailwind.css';
import '../app.css';
</script>

<main class="flex h-screen antialised bg-gray-900 text-gray-300">
  <div class="flex-1 h-full overflow-x-hidden overflow-y-auto p-4">
    <slot />
  </div>
</main>
