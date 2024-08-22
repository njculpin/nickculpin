import { Bread } from "~/components/bread";

const config = {
  title: "Dwarven Dice",
  href: "/dwarven-dice",
};

export default function Index() {
  return (
    <div className="p-8 bg-slate-100">
      <Bread
        pages={[{ name: config.title, href: config.href, current: true }]}
      />
      <div className="flex justify-center items-center">
        <div className="max-w-7xl font-sans p-4 flex flex-col justify-center items-center">
          <h1 className="text-3xl">{config.title}</h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              alt={`dwarvendice_box`}
              src={"/dwarvendice_box.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <img
              alt={`dwarvendice_box_2`}
              src={"/dwarvendice_box_2.jpg"}
              sizes="(max-width: 500px) 100px, 600px"
            />
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">Game Designer, Artist</h1>
              </div>
              <div className="flex flex-col justify-between mt-6">
                <div className="space-y-6">
                  <p className="text-sm leading-6 text-gray-500">
                    Dwarven Dice is a set collection dice game for 3-5 players.
                    Dwarven Dice is played over several turns starting with the
                    first player and going clockwise. On a player's turn, they
                    roll dice to mine for gems and steal them from their
                    opponents. The game ends when there are no more gems
                    remaining in the bag. During each turn, a player rolls dice
                    to try and capture as many gems as they can by mining them
                    from the bag and then collecting them from the table or from
                    other players at the table. A player begins their turn by
                    rolling all 8 dice and can then spend or commit them. A
                    player's turn ends when they choose to pass or has no more
                    actions to spend.
                  </p>
                  <div className="mt-8">
                    <a href="https://boardgamegeek.com/boardgame/298235/dwarven-dice">
                      <p className="text-sm leading-6 text-gray-500 underline">
                        Board Game Geek
                      </p>
                    </a>
                    <a href="https://tabletopia.com/games/dwarven-dice">
                      <p className="text-sm leading-6 text-gray-500 underline">
                        Play Online - Tabletopia
                      </p>
                    </a>
                    <a href="https://www.thegamecrafter.com/games/dwarven-dice">
                      <p className="text-sm leading-6 text-gray-500 underline">
                        Purchase Physical - The Game Crafter
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 border border-gray-100 rounded-lg bg-white">
              <div className="flex flex-col text-center">
                <h1 className="text-2xl font-bold">How to Play</h1>
              </div>
              <div className="flex flex-col justify-between mt-6">
                <div className="space-y-6">
                  <p className="text-sm leading-6 text-gray-500"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
