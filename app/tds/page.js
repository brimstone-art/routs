import { CardsList } from "../components/CardsList/CardsList"; 
import { getGamesByCategory } from "../data/data-utils"; 

export default function TDS() {
    const tdsGames = getGamesByCategory("TDS")
    return (
        <main className={"main-inner"}>
            <CardsList id="TDS" title="TDS" data={tdsGames}  />
        </main>
    )
}