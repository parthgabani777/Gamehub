import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        _id: uuid(),
        categoryName: "Counter-Strike: Global Offensive",
        description:
            "CS:GO is the fourth iteration of Valve's team-based modern-military first-person shooter that features new and updated versions of the classic CS content. While expanding the franchise, the game also introduces new gameplay modes, matchmaking and leader boards.",
    },
    {
        _id: uuid(),
        categoryName: "Valorant",
        description:
            "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
    },
    {
        _id: uuid(),
        categoryName: "Fortnite",
        description:
            "Fortnite is the completely free online game where you and your friends fight to be the last one standing in Battle Royale, join forces to make your own Creative games, or catch a live show at Party Royale.",
    },
    {
        _id: uuid(),
        categoryName: "Apex Legends",
        description:
            "Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.",
    },
];
