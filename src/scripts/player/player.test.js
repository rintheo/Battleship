import Player from './player';
import AI from './ai';
import GameBoard from '../gameBoard';
import Cell from '../cell';

describe('Tests for Player class and AI subclass', () => {
  let player;
  let ai;

  test('Create a player with no input name (default = Player)', () => {
    player = new Player();
    expect(player.name).toBe('Player');
    expect(player).toBeInstanceOf(Player);
    expect(player).not.toBeInstanceOf(AI);
  });

  test('Create a player with input name', () => {
    player = new Player('Rin');
    expect(player.name).toBe('Rin');
    expect(player).toBeInstanceOf(Player);
    expect(player).not.toBeInstanceOf(AI);
  });

  test('Assign a new Game Board to Player', () => {
    player = new Player();
    expect(player.board).toBe(null);
    player.assignBoard(new GameBoard());
    player.board.createBoard();
    expect(player.board).toBeInstanceOf(GameBoard);
    expect(player.board.getBoard()[0][0]).toBeInstanceOf(Cell);
    expect(player.board.getBoard()[9][9]).toBeInstanceOf(Cell);
  });

  test('Create an AI player with no input diffficulty (default = Easy)', () => {
    ai = new AI();
    expect(ai.name).toBe('AI Easy');
    expect(ai.difficulty).toBe('Easy');
    expect(ai).toBeInstanceOf(Player);
    expect(ai).toBeInstanceOf(AI);
  });

  test('Create an AI player with input diffficulty', () => {
    ai = new AI('Hard');
    expect(ai.name).toBe('AI Hard');
    expect(ai.difficulty).toBe('Hard');
    expect(ai).toBeInstanceOf(Player);
    expect(ai).toBeInstanceOf(AI);
  });

  describe('AI Easy gameplay', () => {
    beforeEach(() => {
      ai = new AI('Easy');
      player = new Player();
      player.assignBoard(new GameBoard());
      player.board.createBoard();

      // Will cause ai.chooseAttackCoordinates(player) to always
      // return the first available coordinates which should be
      // [0,0], unless already hit in a test
      jest.spyOn(global.Math, 'random').mockReturnValue(0);
    });

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore();
    });

    test('Send attack to a valid unhit coordinate at enemy board', () => {
      expect(player.board.getBoard()[1][2].isHit).toBe(false);
      player.board.receiveAttack([1, 2]);
      expect(player.board.getBoard()[1][2].isHit).toBe(true);
      expect(ai.chooseAttackCoordinates(player)).not.toBeNull();
      expect(ai.chooseAttackCoordinates(player)).toStrictEqual([0, 0]);
    });

    test('Send attack to an invalid already hit coordinate at enemy board', () => {
      expect(player.board.getBoard()[0][0].isHit).toBe(false);
      player.board.receiveAttack([0, 0]);
      expect(player.board.getBoard()[0][0].isHit).toBe(true);
      expect(ai.chooseAttackCoordinates(player)).not.toBeNull();
      expect(ai.chooseAttackCoordinates(player)).not.toStrictEqual([0, 0]);
    });
  });
});
