declare type Bot = {
  initialize: () => void;
  /** return the square to mark **/
  getNextMove: (gameState: GameState) => import('rxjs').Observable<Coords>;
  getMessage: (gameState: GameState) => import('rxjs').Observable<string>;
};

declare type BotConfig = {
  [configOption: string]: any;
  seed?: any;
  difficulty?: number;
};

declare type BotFactory = (config?: BotConfig) => Bot;