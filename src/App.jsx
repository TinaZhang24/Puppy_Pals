import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

/**
 * @component
 * Shows a list of puppies and allows users to
 * click on a puppy to see more details about it.
 */
export default function App() {
  // We don't need to add `setPuppies` if it never gets called
  const [puppies] = useState(puppyList);

  // State should only be used to hold variables that are changing
  // & will affect what's being rendered on the page.
  // If it doesn't change the render, then you don't need to use state.

  const [selectedPuppy, setSelectedPuppy] = useState();

  /** Updates the selected puppy according to the given `id` */
  function selectPuppy(id) {
    const puppy = puppies.find((p) => p.id === id);
    setSelectedPuppy(puppy);
  }

  // Notice: we can use JSX in a variable in addition to returning it
  const $puppies = (
    <ul className="puppies">
      {puppies.map((puppy) => (
        <li key={puppy.id} onClick={() => selectPuppy(puppy.id)}>
          {puppy.name}
        </li>
      ))}
    </ul>
  );

  const $selectedPuppyTricks = selectedPuppy?.tricks.length > 0 && (
    <div>
      <dt>Tricks</dt>
      <dd>
        <ul>
          {selectedPuppy.tricks.map((t) => (
            <li key={t.id}>{t.title}</li>
          ))}
        </ul>
      </dd>
    </div>
  );

  // This allows us to name the "render" sections of our code
  const $selectedPuppy = selectedPuppy && (
    <section>
      <h2>{selectedPuppy.name}</h2>
      <dl>
        <div>
          <dt>Age</dt>
          <dd>{selectedPuppy.age}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{selectedPuppy.email}</dd>
        </div>
        {$selectedPuppyTricks}
      </dl>
    </section>
  );

  return (
    <>
      <h2>Puppies</h2>
      {$puppies}
      {$selectedPuppy}
    </>
  );
}