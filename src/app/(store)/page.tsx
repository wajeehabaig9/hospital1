// Example in page.tsx
import { Home } from "../pages/Home"

export default async function HomePage() {
//   console.log (
//     crypto.randomUUID().slice(0, 5) + 
//    ` >>> Rendered the home page cache with ${products.length} products and ${categories.length} categories`
// )
  return (
    <div>
      <Home/>
    </div>
  );
}
