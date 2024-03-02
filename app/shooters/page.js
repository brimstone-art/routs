import { getGamesByCategory } from "../data/data-utils"; 
import { CardsList } from "../components/CardsList/CardsList"; 

export default function Shooters() {
    const shootersGames = getGamesByCategory("shooter");
    return (
        <main>
            <CardsList id="shooter" title="Шутеры" data={shootersGames} />
        </main>
    )
}