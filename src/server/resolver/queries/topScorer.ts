import { PremierLeaguePlayerDto } from '../../fpl/api/type/PremierLeaguePlayerDto';
import { players } from '../../fpl/api/bootstrap/bootstrap';

export const getTopScorer = (): PremierLeaguePlayerDto | undefined => {
    const playerList = Object.values(players) as PremierLeaguePlayerDto[];
    return playerList.reduce((topPlayer, currentPlayer) => {
        if (!topPlayer || currentPlayer.totalPoints > topPlayer.totalPoints) {
            return currentPlayer;
        }
        return topPlayer;
    }, playerList[0]);
}; 