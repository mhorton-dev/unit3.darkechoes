import { useState } from "react";
import {episodeList} from  "./data"

export default function App() {
  const [episodes] = useState(episodeList)
  const [selectedEpisode, setSelectedEpisode] = useState()

  function EpisodeDetails() {
    if(!selectedEpisode) {
      return (
        <section className="details">
            <h2>Episode Details</h2>
            <p>Select an episode to learn more</p>
        </section>
      );
    }
    return (
        <section className="details">
          <h2>Episode {selectedEpisode.id}</h2>
          <h3>{selectedEpisode.title}</h3>
          <p>{selectedEpisode.description}</p>
          <button>Watch now</button>
        </section>
      )
  }
  function Episodes() {
    return (
      <>
        <section className="episodes">
          <h2>Episodes</h2>
          <ul className = 'episodes'>
            {episodes.map((episode) => (
              <li key = {episode.id} onClick={() => setSelectedEpisode(episode)}>
                {episode.title}
              </li>
            ))}
          </ul>
        </section>
      </>
    )
  }
  /**List of episodes to select**/
  return (
    <>
      <header className = "head"><h1>Dark Echoes</h1></header>
        <section className = "app">
          <Episodes />
          <EpisodeDetails />
        </section>
    </>
  )
}
